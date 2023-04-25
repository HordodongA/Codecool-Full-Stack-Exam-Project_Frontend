import { BehaviorSubject } from "rxjs"
import { $token, sendAuthCode, endSession, dataRequest } from "../api/landlordBackend"
import { deleteUserData } from "./userData"
import jwt_decode from "jwt-decode"
import { z } from "zod"


const UserSchema = z.object({
    name: z.string(),
    sub: z.string(),
    email: z.string().email(),
    picture: z.string(),
})
export type UserType = z.infer<typeof UserSchema>


// kiolvassa a payloadot
const decodeUser = (token: string | null): UserType | null => {
    if (!token) return null
    const decodedToken = jwt_decode(token)
    const result = UserSchema.safeParse(decodedToken)
    if (!result.success) return null
    return result.data
}

// ha van token, akkor az az init user
export const $user = new BehaviorSubject<UserType | null>(decodeUser($token.getValue()))
// feliratkozunk a $token változásaira: frissítjük a usert
$token.subscribe(token => $user.next(decodeUser(token)))


// Login & Logout handling
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


export const deleteUser = async (callback: CallbackType): Promise<void> => {
    const response = await dataRequest("delete", "/api/user", null)
    if (response.status !== 204)
        return callback.onError!()
    deleteUserData()
    $user.next(null)
    endSession()
    callback.onSuccess()
}