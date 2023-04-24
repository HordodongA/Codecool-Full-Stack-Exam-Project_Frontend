import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $user, logout } from '../states/user'
import { useNavigate } from "react-router-dom"
import { fullUrl } from "../config"
// Import Chakra UI components
import { Center, Flex, VStack, Avatar, Menu, MenuButton, MenuList, MenuItem, Button, IconButton, Heading } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, QuestionOutlineIcon } from '@chakra-ui/icons'


const Navbar: FC = () => {

    const navigate = useNavigate()
    const user = useGlobal($user)


    return (

        <Flex as='nav' width='100%' direction='column' >
            <Flex p='0.5% 1%' width='100%' justify='space-between' bg='gray.300'>

                <Center minW='80px'>
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton isActive={isOpen} as={Button} >
                                    {isOpen ? 'Close' : 'Menu'}
                                </MenuButton>
                                <MenuList>
                                    {user && <MenuItem onClick={() => navigate("/profile")}>My Profile</MenuItem>}
                                    {user && <MenuItem onClick={() => navigate("/assets")}>Home</MenuItem>}
                                    <MenuItem onClick={() => navigate("/about")}>About</MenuItem>
                                    {!user && <MenuItem as='a' href={fullUrl} >Login with Google</MenuItem>}
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

                <Flex minW='80px' justifyContent='flex-end'>
                    <Center>
                        <Avatar size='md' name={user?.name} src={user?.picture} />
                    </Center>
                </Flex>

            </Flex>

            <Flex minH='25px' p='0.5% 1%' width='100%' justify='space-between' alignItems='center' bg='gray.400'>

                <IconButton
                    aria-label='Search database'
                    icon={<ChevronLeftIcon boxSize={6} />}
                    size=''
                    borderRadius='50'
                    onClick={() => navigate(-1)}
                />

                <Breadcrumb fontWeight='medium' fontSize='sm' separator={<ChevronRightIcon color='gray.900' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Current</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <IconButton
                    aria-label='Search database'
                    icon={<QuestionOutlineIcon boxSize={6} />}
                    size=''
                    borderRadius='50'
                />
            </Flex>

        </Flex>

    )
}

export default Navbar