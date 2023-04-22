import axios from "axios"
import { z } from "zod"
import { BehaviorSubject } from "rxjs"
// import jwt_decode from "jwt-decode"


const client = axios.create({ baseURL: "http://localhost:3003" })
// ezt is config a fájlba?

const ResponseSchema = z.object({ sessionToken: z.string() })


export const $token = new BehaviorSubject<string | null>(localStorage.getItem("token"))

export const endSession = () => {
    localStorage.removeItem("token")
    $token.next(null)
}

export const sendAuthCode = async (code: string): Promise<string | null> => {
    // console.log("code received: " + code)
    try {
        const response = await client.post("/api/login", { code })
        // console.log("result after axios:  ", response)

        const result = ResponseSchema.safeParse(response.data)
        // console.log("result after safeParse:  ", result)
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