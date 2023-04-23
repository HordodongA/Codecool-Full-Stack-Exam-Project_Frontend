import { FC, useEffect } from 'react'
import useGlobal from '../hooks/useGlobal'
import { Routes, Route } from "react-router-dom"
import { $userData, downloadUserData, updateUserData } from '../states/userData'
import { deleteUser } from '../states/user'
// Import Components
import NotFound from './NotFound'
// Import Chakra UI components
import { Container, Flex, Heading } from '@chakra-ui/react'



const Assets: FC = () => {

    let userData = useGlobal($userData)

    useEffect(() => {
        downloadUserData()
    }, [])


    return (
            <Flex  p='2% 2%' bg='gray.300' > 

                <Routes>
                    <Route path="/" element={
                        <div>

                            <Heading as='h4' size='md'>
                                My Assets
                            </Heading>
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
                            <button onClick={updateUserData}>UPDATE DATA TEST</button>
                            <button onClick={deleteUser}>DELETE USER TEST</button>
                        </div>
                    } />
                    <Route path="/test" element={<div>***** TEST *****</div>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

            </Flex>
    )
}

export default Assets