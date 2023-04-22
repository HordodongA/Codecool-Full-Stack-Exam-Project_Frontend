import { BehaviorSubject } from "rxjs"
import { $token, sendAuthCode, endSession } from "../api/landlordBackend"
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


type Callback = {
    onSuccess: () => any
    onError: () => any
}

export const login = async (code: string, callback: Callback): Promise<void> => {
    const token = await sendAuthCode(code)
    const user = decodeUser(token)
    if (!user)
        return callback.onError()
    $user.next(user)
    callback.onSuccess()
}

export const logout = () => {
    endSession()
}