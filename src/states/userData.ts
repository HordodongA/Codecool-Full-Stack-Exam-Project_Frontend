import { BehaviorSubject } from "rxjs"
import { z } from "zod"
import { getUserData } from "../api/landlordBackend"

export const UserDataShema = z.object({
    sub: z.string(),
    assets: z.object({
        name: z.string(),
        address: z.string().optional(),
        details: z.string().optional(),
        credentials: z.string().optional(),
        notes: z.string().optional(),
        activities: z.object({
            name: z.string(),
            todos: z.string().optional(),
        }).array().optional(),
        machines: z.object({
            name: z.string(),
            type: z.string().optional(),
            unique_id: z.string().optional(),
            service: z.string().optional(),
            todos: z.string().optional(),
        }).array().optional(),
    }).array().optional(),
})
export type UserDataType = z.infer<typeof UserDataShema>

export const $userData = new BehaviorSubject<UserDataType | null>(null)


export const downloadUserData = async (): Promise<void> => {
    const data = await getUserData()
    if (!data) return
    $userData.next(data)
}


// Edit user data