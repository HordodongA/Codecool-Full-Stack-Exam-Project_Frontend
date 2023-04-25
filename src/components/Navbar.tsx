import { FC } from 'react'
import { useNavigate } from "react-router-dom"
import useGlobal from '../hooks/useGlobal'
import { $user, logout } from '../states/user'
import { fullUrl } from "../config"
// Import Chakra UI components
import { Center, Flex, VStack, Menu, MenuButton, MenuList, MenuItem, Avatar, IconButton, Heading } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, } from '@chakra-ui/react'
import { HamburgerIcon, ChevronLeftIcon, ChevronRightIcon, QuestionOutlineIcon } from '@chakra-ui/icons'


const Navbar: FC = () => {

    const navigate = useNavigate()
    const user = useGlobal($user)


    return (

        <Flex as='nav' width='100%' direction='column' >
            <Flex p='1% 1%' width='100%' justify='space-between' bg='gray.300'>

                <Center minW='50px'>
                    <Menu>
                        {(/* { isOpen } */) => (
                            <>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon boxSize={7} />}
                                    variant='solid'
                                    size='lg'
                                    borderRadius='100'
                                />
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
                    <Heading as='h6' size='xs' _hover={{ cursor: 'pointer' }} onClick={() => navigate("/assets")}>  landlord  </Heading>
                    {user && <Heading as='h4' size='md' marginTop='0rem !important' > {user.name}</Heading>}
                </VStack>

                <Flex minW='50px' justifyContent='flex-end'>
                    <Center _hover={{ cursor: 'pointer' }}>
                        <Avatar onClick={() => navigate("/profile")} size='md' name={user?.name} src={user?.picture} />
                    </Center>
                </Flex>

            </Flex>

            <Flex minH='25px' p='0.5% 1%' width='100%' justify='space-between' alignItems='center' bg='gray.400'>

                <IconButton
                    aria-label='Search database'
                    icon={<ChevronLeftIcon boxSize={6} />}
                    size=''
                    borderRadius='100'
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
                    // icon={<QuestionOutlineIcon boxSize={6} />}
                    size=''
                    borderRadius='100'
                />
            </Flex>

        </Flex>

    )
}

export default Navbar