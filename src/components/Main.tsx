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
// Import Components
import NotFound from './NotFound'
import Protected from './Route'
// Import Chakra UI components
import { Container } from '@chakra-ui/react'


const Main: FC = () => {

    const user = useGlobal($user)


    return (

        <Container as='main' maxW='95%' p='1rem' centerContent>
            <Routes>
                <Route index path="/*" element={user ? <Assets /> : <Login />} />
                <Route
                    // index
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
                <Route path="/modals/" element={<TestModal />}/>


                <Route path="/test/" >
                    <Route path="/test/" element={<div>TEST</div>} />
                    <Route path="/test/alma" element={<div>ALMA</div>} />
                    <Route path="/test/korte/">
                        <Route path="/test/korte/" element={<div>KORTE</div>} />
                        <Route path="/test/korte/barack" element={<div>BARACK</div>} />
                    </Route>
                </Route>



                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>

    )
}

export default Main