import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $user } from '../states/user'
import fullUrl from '../config'
import { Routes, Route, useNavigate } from "react-router-dom"
// Import Components
import Callback from './Callback'


const Main: FC = () => {
    const navigate = useNavigate()

    const user = useGlobal($user)


    return (
        <div>

            {user && <p>Hello, {user.email}</p>}

            <div>
                <h3>Welcome to</h3>
                <h1>landlord</h1>
                <h4>maintenance assist</h4>
                <a href={fullUrl}>Login with Google</a>
            </div>


            <Routes>
                <Route path="/dashboard" element={<div>Dashboard</div>} />
                <Route path="/callback" element={<Callback />} />
                <Route path="*" element={<div>404: Page not found</div>} />
            </Routes>

        </div>
    )
}

export default Main