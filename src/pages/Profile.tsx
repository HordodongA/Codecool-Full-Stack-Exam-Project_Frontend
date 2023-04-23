import { FC } from 'react'
// import { useNavigate } from "react-router-dom"
import useGlobal from '../hooks/useGlobal'
import { $user, deleteUser } from '../states/user'
// Import Components

// Import Chakra UI components
import { Box, Center, /* Flex, Stack, VStack, */ Avatar, Button, Heading, Text } from '@chakra-ui/react'


const Profile: FC = () => {

    const user = useGlobal($user)

    return (

        <Box >
            <Center>
                <Avatar size='xl' name={user?.name} src={user?.picture} />
            </Center>

            <Heading as='h3' size='lg' textAlign='center' margin='1.5rem 0 2rem'>
                My Profile
            </Heading>

            <Box>
                <Box marginTop='1.5rem'>
                    <Text fontSize='m' >name</Text>
                    <Text fontSize='3xl' >{user?.name}</Text>
                </Box>
                <Box marginTop='1.5rem'>
                    <Text fontSize='m' >email</Text>
                    <Text fontSize='3xl' >{user?.email}</Text>
                </Box>
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