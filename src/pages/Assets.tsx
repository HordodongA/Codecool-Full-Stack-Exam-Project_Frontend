import { FC, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { downloadUserData } from '../states/userData'
// Import Components
import MyAssets from '../components/MyAssets'
import NotFound from '../components/NotFound'
// Import Chakra UI components
import { Flex, } from '@chakra-ui/react'


const Assets: FC = () => {

    useEffect(() => {
        downloadUserData()
    }, [])


    return (

        <Flex p='2% 2%' >
            <Routes>
                <Route path="/" element={<MyAssets />} />
                <Route path="/alma" element={<div>ALMA</div>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Flex>

    )
}

export default Assets