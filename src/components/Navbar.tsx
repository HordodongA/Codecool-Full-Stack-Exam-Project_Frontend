import { FC } from 'react'
import { useNavigate } from "react-router-dom"
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $user, logout } from '../states/user'
// Import data for render
import { fullUrl } from "../config"
// Import Chakra UI components
import { Center, Flex, VStack, Menu, MenuButton, MenuList, MenuItem, Avatar, IconButton, Heading, Icon } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
// Import React icons
import { FiUser, FiHome, FiLogIn, FiLogOut, FiClipboard, FiBookOpen } from "react-icons/fi"


const Navbar: FC = () => {

    const user = useGlobal($user)
    const navigate = useNavigate()


    return (
        <Flex p='1% 1%' width='100%' maxH='70px' justify='space-between' bg='yellow1.600'>
            <Center minW='50px'>
                <Menu>
                    {() => (
                        <>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon boxSize={7} />}
                                variant='solid'
                                size='lg'
                                borderRadius='100'
                                bg='yellow1.800'
                                color='yellow1.100'
                            />
                            <MenuList bg='yellow1.800' >
                                {user && <MenuItem bg='yellow1.400' icon={<Icon as={FiHome} mr='5px' />} onClick={() => navigate("/assets")}>Home</MenuItem>}
                                {user && <MenuItem bg='yellow1.400' icon={<Icon as={FiUser} mr='5px' />} onClick={() => navigate("/profile")}>My Profile</MenuItem>}
                                <MenuItem bg='yellow1.400' icon={<Icon as={FiClipboard} mr='5px' />} onClick={() => navigate("/about")}>About</MenuItem>
                                {!user && <MenuItem bg='yellow1.400' icon={<Icon as={FiLogIn} mr='5px' />} as='a' href={fullUrl} >Login with Google</MenuItem>}
                                {user && <MenuItem bg='yellow1.400' icon={<Icon as={FiLogOut} mr='5px' />} onClick={() => logout({ onSuccess: () => navigate("/") })}>Logout</MenuItem>}
                                {user && <MenuItem bg='yellow1.400' icon={<Icon as={FiBookOpen} mr='5px' />} onClick={() => navigate("/testing")}>Mentor Area</MenuItem>}
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Center>

            <VStack direction="column" justify='center'>
                <Heading as='h6' size='xs' _hover={{ cursor: 'pointer' }} onClick={() => navigate("/assets")}>  landlord  </Heading>
                {user && <Heading as='h4' fontSize={['sm', 'md', 'xl']} marginTop='0rem !important' > {user.name}</Heading>}
            </VStack>

            <Flex minW='50px' justifyContent='flex-end'>
                <Center _hover={{ cursor: 'pointer' }}>
                    <Avatar onClick={() => navigate("/profile")} size='md' name={user?.name} src={user?.picture} />
                </Center>
            </Flex>
        </Flex>
    )
}

export default Navbar