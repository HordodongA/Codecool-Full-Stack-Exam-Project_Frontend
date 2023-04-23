import type { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $user, logout } from '../states/user'
import { useNavigate } from "react-router-dom"

const Footer: FC = () => {
    const navigate = useNavigate()

    const user = useGlobal($user)

    return (
        <div>
            <hr />
            {user && <button onClick={() => logout({ onSuccess: () => navigate("/") })}>LOGOUT</button>}
        </div>
    )
}

export default Footer