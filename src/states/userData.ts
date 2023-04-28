import { BehaviorSubject } from "rxjs"
import { z } from "zod"
import { dataRequest } from "../api/landlordBackend"
// import { getUserData } from "../api/landlordBackend"

const ActivitySchema = z.object({
    name: z.string(),
    todos: z.string().optional(),
})
const MachineSchema = z.object({
    name: z.string(),
    type: z.string().optional(),
    unique_id: z.string().optional(),
    service: z.string().optional(),
    todos: z.string().optional(),
})
const AssetSchema = z.object({
    name: z.string(),
    address: z.string().optional(),
    details: z.string().optional(),
    credentials: z.string().optional(),
    notes: z.string().optional(),
    activities: ActivitySchema.array().optional(),
    machines: MachineSchema.array().optional(),
})
export const UserDataShema = z.object({
    sub: z.string(),
    assets: AssetSchema.array().optional(),
})
export type UserDataType = z.infer<typeof UserDataShema>


export const $userData = new BehaviorSubject<UserDataType | null>(null)


export const downloadUserData = async (): Promise<void> => {
    const response = await dataRequest("get", "/api/user", null)
    if (response.status !== 200) return
    $userData.next(response.data)
}


// ! testing area: user object for update data
// const testDataForPUT = {
//     sub: '106261926372593079723', assets:
//         [
//             {
//                 "name": "Grove street",
//                 "location": "San Andreas",
//                 "notes": "My granny's house",
//                 "activities": [
//                     {
//                         "name": "activity one",
//                         "todos": "kikergetni a varjakat a nappaliból",
//                         "_id": "6444d531675b77a94c51b94d"
//                     },
//                     {
//                         "name": "activity two",
//                         "todos": "várni a postást",
//                         "_id": "6444d531675b77a94c51b94e"
//                     }
//                 ],
//                 "_id": "6444d531675b77a94c51b94c",
//                 "machines": []
//             }
//         ]
// }
// ! /testing area


// User data handling

type CallbackType = {
    onSuccess: () => any
    onError: () => any
}

export const updateUserData = async (data: UserDataType, callback: CallbackType): Promise<void> => {
    const result = UserDataShema.safeParse(data)
    if (result.success === false)
        return callback.onError()
    $userData.next(result.data)
    const payload = $userData.getValue()     // * while prod
    // const payload = testDataForPUT          // ! while testing
    const response = await dataRequest("put", "/api/user", payload)
    if (response.status !== 200)
        return callback.onError()
    $userData.next(response.data)
    callback.onSuccess()
}

export const deleteUserData = async (): Promise<void> => {
    $userData.next(null)
}

// ! Statistics -- NOT WORKING @&#˘!
/* export const numberOfAssets: number | undefined = $userData!.getValue()!.assets!.length

export const activityCounter = (): number | null => {
    let allActivities = 0
    if ($userData!.getValue()!.assets) {
        let userAssets = $userData!.getValue()!.assets!
        for (let asset of userAssets) {
            const activities = asset.activities!.length
            allActivities += activities
        }
    }
    return allActivities
}

export const machineCounter = (): number | null => {
    let allMachines = 0
    if ($userData!.getValue()!.assets) {
        let userAssets = $userData!.getValue()!.assets!
        for (let asset of userAssets) {
            const machines = asset.machines!.length
            allMachines += machines
        }
    }
    return allMachines
} */