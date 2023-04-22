import axios from "axios"
import {z} from "zod"

const client = axios.create({baseURL: "http://localhost:3003"})
// ezt is config a fájlba?

const ResponseSchema = z.object({ sessionToken: z.string() })


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
        return result.data.sessionToken
    }
    catch (error) {
        console.log(error)
        return null
    }
}