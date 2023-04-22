import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $user, logout } from '../states/user'
import { useNavigate } from "react-router-dom"


const Navbar: FC = () => {

    const navigate = useNavigate()

    const user = useGlobal($user)


    return (
        <div>
            <div>Navbar: menu, user name, profile picture</div>
            {user && <p>Hello {user.name}</p>}
            {user && <button onClick={() => logout({ onSuccess: () => navigate("/") })}>LOGOUT</button>}
            <div>/ Navbar</div>
        </div>
    )
}

export default Navbar