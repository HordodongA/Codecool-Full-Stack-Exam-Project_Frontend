import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $user } from '../states/user'
import { Routes, Route } from "react-router-dom"
// Import Components
import Login from './Login'
import Callback from './Callback'
import Protected from './Route'


const Main: FC = () => {

    const user = useGlobal($user)


    return (
        <div>
            {/* {!user && <Login />} */}



            <Routes>
                <Route
                    path="/dashboard"
                    element={
                        <Protected hasAccess={!!user}>
                            <div>Dashboard</div>
                        </Protected>
                    }
                />
                <Route path="/callback" element={<Callback />} />
                {/* <Route path="/" element={<div>PERSEMMI</div>} /> */}
                <Route path="/" element={!user && <Login />} />
                <Route path="*" element={<div>404: Page not found</div>} />
            </Routes>

        </div>
    )
}

export default Main