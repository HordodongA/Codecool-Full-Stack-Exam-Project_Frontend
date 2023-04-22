import { FC } from 'react'
import { fullUrl } from "../config"

const Login: FC = () => {
    return (
        <div>
            <h3>Welcome to</h3>
            <h1>landlord</h1>
            <h4>maintenance assist</h4>
            <a href={fullUrl}>Login with Google</a>
        </div>
    )
}

export default Login