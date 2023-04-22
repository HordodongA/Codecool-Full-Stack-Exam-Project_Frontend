import axios from "axios"
import { z } from "zod"
import { BehaviorSubject } from "rxjs"
import jwt_decode from "jwt-decode"
import { landlordBackendUrl } from "../config"
import { UserDataShema, UserDataType } from "../states/userData"
// Configure Axios
const client = axios.create({ baseURL: landlordBackendUrl })

const LoginResponseSchema = z.object({ sessionToken: z.string() })

export const $token = new BehaviorSubject<string | null>(localStorage.getItem("token"))

export const endSession = () => {
    localStorage.removeItem("token")
    $token.next(null)
}

// Token expiration handler
let tokenTimeout: number | null = null
$token.subscribe(token => {
    if (tokenTimeout) { clearTimeout(tokenTimeout) }
    if (!token) return
    const decoded = jwt_decode(token) as any
    const expiresIn = decoded.exp * 1000 - new Date().getTime()
    tokenTimeout = setTimeout(endSession, expiresIn)
})


export const sendAuthCode = async (code: string): Promise<string | null> => {
    try {
        const response = await client.post("/api/login", { code })
        const result = LoginResponseSchema.safeParse(response.data)
        if (result.success === false) {
            console.log(result.error)
            return null
        }
        const token = response.data.sessionToken
        $token.next(token)
        localStorage.setItem("token", token)
        return token
    }
    catch (error) {
        console.log(error)
        return null
    }
}


export const getUserData = async (): Promise<UserDataType | null> => {
    try {
        const response = await client.get("/api/user", { headers: { "Authorization": localStorage.getItem("token") } })
        const result = UserDataShema.safeParse(response.data)
        if (result.success === false) {
            console.log(result.error)
            return null
        }
        return result.data
    }
    catch (error) {
        console.log(error)
        return null
    }
}


// update user data PUT + token + {}