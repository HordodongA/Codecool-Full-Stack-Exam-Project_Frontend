import { FC, useEffect } from 'react'
import useGlobal from '../hooks/useGlobal'
import { Routes, Route } from "react-router-dom"
import { $userData } from '../states/userData'
import { downloadUserData } from '../states/userData'
// Import Components
import NotFound from './NotFound'


const Assets: FC = () => {

    let userData = useGlobal($userData)

    useEffect(() => {
        downloadUserData()
    }, [])


    return (
        <div>
            <div>
                <h2>My assets:</h2>
                Assets
                {userData && userData.assets && userData.assets.map((asset, i) => {
                    return (
                        <div key={i}>
                            <h3>{asset.name}</h3>
                        </div>
                    )
                })}
                <div>
                    <h3>+ Add new asset</h3>
                </div>
            </div>
            <Routes>
                <Route path="/test" element={<div>***** TEST *****</div>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>

    )
}

export default Assets