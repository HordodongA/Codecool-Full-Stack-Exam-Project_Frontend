import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $user, logout } from '../states/user'
import { useNavigate } from "react-router-dom"
import { fullUrl } from "../config"
// Import Chakra UI components
import { Center, Flex, VStack, Avatar, Menu, MenuButton, MenuList, MenuItem, Button, Heading } from '@chakra-ui/react'


const Navbar: FC = () => {

    const navigate = useNavigate()
    const user = useGlobal($user)


    return (

        <Flex as='nav' p='1% 2%' width='100%' justify='space-between' bg='gray.300'>

            <Center>
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton isActive={isOpen} as={Button} >
                                {isOpen ? 'Close' : 'Menu'}
                            </MenuButton>
                            <MenuList>
                                {user && <MenuItem onClick={() => navigate("/profile")}>My Profile</MenuItem>}
                                {user && <MenuItem>Home</MenuItem>}
                                <MenuItem>About</MenuItem>
                                <MenuItem>Contact</MenuItem>
                                {!user && <MenuItem as='a' href={fullUrl} >Login</MenuItem>}
                                {user && <MenuItem onClick={() => logout({ onSuccess: () => navigate("/") })}>Logout</MenuItem>}
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Center>

            <VStack direction="column" justify='center'>
                <Heading as='h6' size='xs'>  landlord  </Heading>
                {user && <Heading as='h4' size='md' marginTop='0rem !important'> {user.name}</Heading>}
            </VStack>

            <Center>
                <Avatar size='md' name={user?.name} src={user?.picture} />
            </Center>

        </Flex>

    )
}

export default Navbar