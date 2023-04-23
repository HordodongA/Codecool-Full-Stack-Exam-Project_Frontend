import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $user } from '../states/user'
import { Routes, Route } from "react-router-dom"
// Import Components
import Login from './Login'
import Callback from './Callback'
import Protected from './Route'
import Assets from './Assets'
import NotFound from './NotFound'
// Import Chakra UI components
import { Container, Heading } from '@chakra-ui/react'



const Main: FC = () => {

    const user = useGlobal($user)


    return (
        <Container maxW='90%'  p='2% 2%' centerContent>

            <Routes>
                <Route
                    path="/assets/*"
                    element={
                        <Protected hasAccess={!!user}>
                            <Assets />
                        </Protected>
                    }
                />
                <Route path="/callback" element={<Callback />} />
                <Route path="/" element={!user && <Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </Container>
    )
}

export default Main