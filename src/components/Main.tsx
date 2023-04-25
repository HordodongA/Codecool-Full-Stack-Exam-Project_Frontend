import { FC } from 'react'
import { Routes, Route } from "react-router-dom"
import useGlobal from '../hooks/useGlobal'
import { $user } from '../states/user'
// Import Pages
import About from '../pages/About'
import Assets from '../pages/Assets'
import Callback from '../pages/Callback'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import TestModal from '../pages/TestModal'
import NotFound from './NotFound'
// Import Components
import Protected from './Route'
// Import Chakra UI components
import { Container } from '@chakra-ui/react'


const Main: FC = () => {

    const user = useGlobal($user)


    return (

        <Container as='main' maxW='95%' p='1rem' centerContent>
            <Routes>
                <Route index path="/*" element={!user && <Login />} />
                <Route
                    path="/assets/*"
                    element={
                        <Protected hasAccess={!!user}>
                            <Routes>
                                <Route path="/" >
                                    <Route path="/" element={<Assets />} />
                                    <Route path="/asset/" >
                                        <Route path="/asset/" element={<div>ASSET HAS TO BE DINAMiC</div>} />
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

                {/* ! TEST PAGE */}
                <Route path="/modals/" element={<TestModal />} />

            </Routes>
        </Container>

    )
}

export default Main