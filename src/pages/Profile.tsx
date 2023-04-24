import { FC } from 'react'
// import { useNavigate } from "react-router-dom"
import useGlobal from '../hooks/useGlobal'
import { $user, deleteUser } from '../states/user'
// import { $userData } from '../states/userData'
// Import Chakra UI components
import { Box, Center, Avatar, Button, Heading, Text } from '@chakra-ui/react'


const Profile: FC = () => {

    const user = useGlobal($user)
    // const userData = useGlobal($userData)

    
    return (

        <Box >
            <Center marginTop='10%'>
                <Avatar size='xl' name={user?.name} src={user?.picture} />
            </Center>

            <Heading as='h3' size='lg' textAlign='center' margin='1.5rem 0 2rem'>
                My Profile
            </Heading>

            <Box minW='350' marginTop='2.5rem'>
                <Box marginTop='1rem'>
                    <Text fontSize='m' >name</Text>
                    <Text textAlign='right' fontSize='2xl' >{user?.name}</Text>
                </Box>
                <Box marginTop='1rem'>
                    <Text fontSize='m' >email</Text>
                    <Text textAlign='right' fontSize='2xl' >{user?.email}</Text>
                </Box>
                {/* Első rálépéskor látszik a választ, frissítéskor eltűnik */}
{/*                 <Box marginTop='1rem'>
                    <Text fontSize='m' >number of assets</Text>
                    <Text textAlign='right' fontSize='2xl' >{userData?.assets?.length}</Text>
                </Box> */}
            </Box>

            <Center marginTop='3rem'>
                <Button colorScheme='red' onClick={deleteUser}>
                    Terminate my profile
                </Button>
            </Center>
        </Box>

    )
}

export default Profile