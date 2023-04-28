import { BehaviorSubject } from "rxjs"
import { $token, sendAuthCode, endSession, dataRequest } from "../api/landlordBackend"
import { deleteUserData } from "./userData"
import jwt_decode from "jwt-decode"
import { z } from "zod"


// Handling session token payload decoding
const UserSchema = z.object({
    name: z.string(),
    sub: z.string(),
    email: z.string().email(),
    picture: z.string(),
})
export type UserType = z.infer<typeof UserSchema>

const decodeUser = (token: string | null): UserType | null => {
    if (!token) return null
    const decodedToken = jwt_decode(token)
    const result = UserSchema.safeParse(decodedToken)
    if (!result.success) return null
    return result.data
}


// user reactive state
export const $user = new BehaviorSubject<UserType | null>(decodeUser($token.getValue()))
$token.subscribe(token => $user.next(decodeUser(token)))


// Handling login and logout process
type CallbackType = {
    onSuccess: () => any
    onError?: () => any
}

export const login = async (code: string, callback: CallbackType): Promise<void> => {
    const token = await sendAuthCode(code)
    const user = decodeUser(token)
    if (!user)
        return callback.onError!()
    $user.next(user)
    callback.onSuccess()
}

export const logout = (callback: CallbackType) => {
    endSession()
    callback.onSuccess()
}


// Handling user account deletion
export const deleteUser = async (callback: CallbackType): Promise<void> => {
    const response = await dataRequest("delete", "/api/user", null)
    if (response.status !== 204)
        return callback.onError!()
    deleteUserData()
    $user.next(null)
    endSession()
    callback.onSuccess()
}