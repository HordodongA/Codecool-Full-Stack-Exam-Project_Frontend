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
import Profile from '../pages/Profile'
import About from '../pages/About'
// Import Chakra UI components
import { Container } from '@chakra-ui/react'


const Main: FC = () => {

    const user = useGlobal($user)


    return (

        <Container maxW='95%' p='2% 2%' centerContent>

            <Routes>
                <Route
                    path="/assets/*"
                    element={
                        <Protected hasAccess={!!user}>
                            <Assets />
                        </Protected>
                    }
                />
                <Route
                    path="/profile/*"
                    element={
                        <Protected hasAccess={!!user}>
                            <Profile />
                        </Protected>
                    }
                />
                <Route path="/callback" element={<Callback />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={!user && <Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </Container>

    )
}

export default Main