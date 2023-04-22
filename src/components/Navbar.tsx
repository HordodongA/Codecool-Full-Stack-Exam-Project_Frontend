import { FC } from 'react'
import { logout } from '../states/user'

const Navbar: FC = () => {

    // itt kell a user basic object

    return (
        <div>
            <div>Navbar: menu, user name, profile picture</div>
            <button onClick={logout}>LOGOUT</button>
            <div>/ Navbar</div>
        </div>
    )
}

export default Navbar