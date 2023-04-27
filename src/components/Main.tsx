import { FC } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import useGlobal from '../hooks/useGlobal'
import { $user } from '../states/user'
// Import Pages
import About from '../pages/About'
import Assets from '../pages/Assets'
import Callback from '../pages/Callback'
import Asset from '../pages/Asset'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import NotFound from './NotFound'
// Import Components
import Protected from './Route'
// Import Chakra UI components
import { Container } from '@chakra-ui/react'


const Main: FC = () => {

    const user = useGlobal($user)


    return (

        <Container as='main' maxW='100%' p='0 0 1rem 0'  >
            <Routes >
                <Route path="/*" element={!user ? <Login /> : <Navigate to="/assets" />} />
                <Route
                    path="/assets/*"
                    element={
                        <Protected hasAccess={!!user}>
                            <Routes>
                                <Route path="/" >
                                    <Route path="/" index element={<Assets />} />
                                    <Route path="/asset/" >
                                        <Route path="/asset/" element={<Asset />} />
                                        <Route path="/asset/activities/" >
                                            <Route path="/asset/activities/" element={<div>ACTIVITIES</div>} />
                                            <Route path="/asset/activities/activity" element={<div>ACTIVITY, DINAMIC</div>} />
                                        </Route>
                                        <Route path="/asset/machines/">
                                            <Route path="/asset/machines/" element={<div>MACHINES</div>} />
                                            <Route path="/asset/machines/machine" element={<div>MACHINE, DINAMIC</div>} />
                                        </Route>
                                    </Route>
                                </Route>
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Protected>
                    }
                />
                <Route
                    path="/profile/*"
                    element={
                        <Protected hasAccess={!!user}>
                            <Routes>
                                <Route path="/" element={<Profile />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Protected>
                    }
                />
                <Route path="/callback" element={<Callback />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>

    )
}

export default Main