import { BehaviorSubject } from "rxjs"
import { z } from "zod"
import { dataRequest } from "../api/landlordBackend"


const ActivitySchema = z.object({
    name: z.string(),
    todos: z.string().optional(),
    _id: z.string().optional()
})
const MachineSchema = z.object({
    name: z.string(),
    type: z.string().optional(),
    unique_id: z.string().optional().optional(),
    service: z.string().optional(),
    todos: z.string().optional(),
    _id: z.string().optional()
})
const AssetSchema = z.object({
    name: z.string(),
    address: z.string().optional(),
    details: z.string().optional(),
    credentials: z.string().optional(),
    notes: z.string().optional(),
    activities: ActivitySchema.array().optional(),
    machines: MachineSchema.array().optional(),
    _id: z.string().optional()
})
export const UserDataShema = z.object({
    sub: z.string(),
    assets: AssetSchema.array().optional(),
    _id: z.string().optional()
})
export type UserDataType = z.infer<typeof UserDataShema>


// userData reactive state
export const $userData = new BehaviorSubject<UserDataType | null>(null)

// Handling user Data: GET (automatically triggered by $token value change)
export const downloadUserData = async (): Promise<void> => {
    const response = await dataRequest("get", "/api/user", null)
    if (response.status !== 200) return
    $userData.next(response.data)
}


// Handling user Data: PUT (triggered by user action)
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
    const response = await dataRequest("put", "/api/user", payload)
    if (response.status !== 200)
        return callback.onError()
    $userData.next(response.data)
    callback.onSuccess()
}


// Handling user Data: DELETE (boundled to deletion of $user value - triggered by user action: delete profile)
export const deleteUserData = async (): Promise<void> => {
    $userData.next(null)
}

// Handling user statistics
export const assetCounter = (): number => {
    if ($userData.getValue() === null) return 0
    return $userData.getValue()!.assets!.length
}

export const activityCounter = (): number => {
    let allActivities = 0
    if ($userData.getValue() === null) return allActivities
    if ($userData!.getValue()!.assets) {
        let userAssets = $userData!.getValue()!.assets!
        for (let asset of userAssets) {
            const activities = asset.activities!.length
            allActivities += activities
        }
    }
    return allActivities
}

export const machineCounter = (): number => {
    let allMachines = 0
    if ($userData.getValue() === null) return allMachines
    if ($userData!.getValue()!.assets) {
        let userAssets = $userData!.getValue()!.assets!
        for (let asset of userAssets) {
            const machines = asset.machines!.length
            allMachines += machines
        }
    }
    return allMachines
}