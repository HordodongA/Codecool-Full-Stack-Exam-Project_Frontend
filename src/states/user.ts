import { BehaviorSubject } from "rxjs"
import { sendAuthCode } from "../api/landlordBackend"
import jwt_decode from "jwt-decode"
import { z } from "zod"


const UserSchema = z.object({
    name: z.string(),
    sub: z.string(),
    email: z.string().email(),
    picture: z.string(),
})
export type UserType = z.infer<typeof UserSchema>

export const $user = new BehaviorSubject<UserType | null>(null)



export const login = async (code: string) => {
    const token = await sendAuthCode(code)
    if (!token) return
    const decodedToken = jwt_decode(token)
    const result = UserSchema.safeParse(decodedToken)
    if (result.success === false) { return console.log(result.error) }
    // console.log(result.data)
    $user.next(result.data)
    localStorage.setItem("token", token)
    console.log($user.getValue())
}





export const logout = () => {
    localStorage.removeItem("token")
    $user.next(null)
}