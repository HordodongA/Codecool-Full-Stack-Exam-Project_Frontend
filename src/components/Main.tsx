import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $user } from '../states/user'
import { Routes, Route } from "react-router-dom"
// Import Components
import Login from './Login'
import Callback from './Callback'
import Protected from './Route'
import Assets from './Assets'


const Main: FC = () => {

    const user = useGlobal($user)


    return (
        <div>

            <Routes>
                <Route
                    path="/assets"
                    element={
                        <Protected hasAccess={!!user}>
                            <Assets />
                        </Protected>
                    }
                />
                <Route path="/callback" element={<Callback />} />
                <Route path="/" element={!user && <Login />} />
                <Route path="*" element={<div>404: Page not found</div>} />
            </Routes>

        </div>
    )
}

export default Main