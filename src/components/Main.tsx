import { FC } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $user } from '../states/user'
// Import Pages
import About from '../pages/About'
import Activities from '../pages/Activities'
import Activity from '../pages/Activity'
import Assets from '../pages/Assets'
import Asset from '../pages/Asset'
import AssetData from '../pages/AssetData'
import Callback from '../pages/Callback'
import Login from '../pages/Login'
import Machines from '../pages/Machines'
import Machine from '../pages/Machine'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
// Import own Components
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
                                {/* <Route path="/" > */}
                                <Route path="/" index element={<Assets />} />
                                <Route path="/:asset/" >
                                    <Route path="/:asset/" element={<Asset />} />
                                    <Route path="/:asset/activities/" >
                                        <Route path="/:asset/activities/" element={<Activities />} />
                                        <Route path="/:asset/activities/:activity" element={<Activity />} />
                                    </Route>
                                    <Route path="/:asset/machines/">
                                        <Route path="/:asset/machines/" element={<Machines />} />
                                        <Route path="/:asset/machines/:machine" element={<Machine />} />
                                    </Route>
                                    <Route path="/:asset/asset-data" element={<AssetData />} />
                                </Route>
                                {/* </Route> */}
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