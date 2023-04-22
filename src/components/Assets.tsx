import { FC, useEffect } from 'react'
import useGlobal from '../hooks/useGlobal'
// import { $user } from '../states/user'
import { $userData } from '../states/userData'
import { downloadUserData } from '../states/userData'

const Assets: FC = () => {

    let userData = useGlobal($userData)

    useEffect(() => {
        downloadUserData()
    }, [])


    return (
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
    )
}

export default Assets