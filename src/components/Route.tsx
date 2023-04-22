import { FC, ReactNode } from "react"
import { Navigate } from "react-router-dom"

type Props = {
    hasAccess: boolean,
    children: ReactNode
}


const Protected: FC<Props> = ({ children, hasAccess }) => {
    
    if (!hasAccess)
        return <Navigate to="/" />


    return (
        <div>
            {children}
        </div>
    )
}

export default Protected