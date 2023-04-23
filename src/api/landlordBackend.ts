import axios, { AxiosError } from "axios"
import { z } from "zod"
import { BehaviorSubject } from "rxjs"
import jwt_decode from "jwt-decode"
import { landlordBackendUrl } from "../config"
import { UserDataShema } from "../states/userData"

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


// Handling login process
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


// Handling user data management
type dataResponseType = { // generic type + zod
    data: any,
    status: number
}

export const dataRequest = async <T>(method: string, path: string, payload: T | null): Promise<dataResponseType> => {
    try {
        const response = await client.request({
            method,
            url: path,
            data: payload,
            headers: { "Authorization": localStorage.getItem("token") },
        })
        if (method === "get" || method === "put") {
            const result = UserDataShema.safeParse(response.data)
            if (result.success === false) {
                console.log(result.error)
                return {
                    data: null,
                    status: 500
                }
            }
            return {
                data: result.data,
                status: response.status
            }
        }
        return {
            data: response.data,
            status: response.status
        }
    }
    catch (error) {
        const response = (error as AxiosError).response
        if (response?.status === 401) endSession()
        if (response) {
            return {
                data: response.data,
                status: response.status
            }
        }
        return {
            data: null,
            status: 0
        }
    }
}