import { FC } from 'react'
// import { useNavigate } from "react-router-dom"
import useGlobal from '../hooks/useGlobal'
import { $user, deleteUser } from '../states/user'
// import { $userData } from '../states/userData'
// Import Components
import ConfirmDelete from '../components/Modals/ConfirmDelete'
// Import Chakra UI components
import { Box, Center, Avatar, Heading, Text, useToast } from '@chakra-ui/react'


const Profile: FC = () => {

    const user = useGlobal($user)
    // const userData = useGlobal($userData)
    const toast = useToast()


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
                    <Text textAlign='right' fontSize='2xl' borderBottomWidth='medium'>{user?.name}</Text>
                </Box>
                <Box marginTop='1rem'>
                    <Text fontSize='m' >email</Text>
                    <Text textAlign='right' fontSize='2xl' borderBottomWidth='medium'>{user?.email}</Text>
                </Box>
                {/* Első rálépéskor látszik a választ, frissítéskor eltűnik */}
                {/*                 <Box marginTop='1rem'>
                    <Text fontSize='m' >number of assets</Text>
                    <Text textAlign='right' fontSize='2xl' >{userData?.assets?.length}</Text>
                </Box> */}
            </Box>

            <Center marginTop='3rem'>

                <ConfirmDelete
                    buttonText="user profile"
                    docType="user profile"
                    docName={user!.name}
                    onConfirm={() => deleteUser({
                        onSuccess: () => toast({
                            title: 'Operation successful',
                            description: "Data successfully deleted from our system.",
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        }),
                        onError: () => toast({
                            title: 'Operation failed',
                            description: "Something went wrong, please try again later.",
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        })
                    })}
                />
            </Center>
        </Box>

    )
}

export default Profile