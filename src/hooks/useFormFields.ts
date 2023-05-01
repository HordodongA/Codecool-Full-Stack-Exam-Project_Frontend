import React, { useState } from "react"

export const useFormFields = (initialStates: {[key: string] : string}): [{[key: string] : string}, (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void] => {
    const [fields, setFields] = useState(initialStates)

    return [
        fields,
        function handleFieldChange (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
            setFields({
                ...fields,
                [event.target.id]: event.target.value
            })
        }
    ]
}