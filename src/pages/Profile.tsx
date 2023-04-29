import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $user, deleteUser } from '../states/user'
import { $userData, assetCounter, activityCounter, machineCounter } from '../states/userData'
// Import Components
import NavigateAndInfo from '../components/NavigateAndInfo'
import ConfirmDelete from '../components/Modals/ConfirmDelete'
// Import Chakra UI components
import { Box, Flex, Center, Avatar, Heading, Text, useToast, VStack } from '@chakra-ui/react'


const Profile: FC = () => {

    const user = useGlobal($user)
    // @ts-ignore
    const userData = useGlobal($userData)
    const toast = useToast()


    return (
        <VStack width='100%' >
            <NavigateAndInfo help="profile" />

            <Box >
                <Center >
                    <Avatar size='xl' name={user?.name} src={user?.picture} />
                </Center>
                <Box minW='300' marginTop='2rem'>
                    <Heading as='h3' size='lg' textAlign='center' >
                        My Profile
                    </Heading>
                    <Box marginTop='1rem'>
                        <Text fontSize='m' >name</Text>
                        <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'>{user?.name}</Text>
                    </Box>
                    <Box marginTop='1rem'>
                        <Text fontSize='m' >email</Text>
                        <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'>{user?.email}</Text>
                    </Box>
                </Box>
                <Box minW='300' marginTop='2rem'>
                    <Heading as='h3' size='lg' textAlign='center' >
                        My Statistics
                    </Heading>
                    <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='40px'>
                        <Box marginTop='1rem' minWidth='200px'>
                            <Text fontSize='m' >number of assets</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'>{assetCounter()}</Text>
                        </Box>
                        <Box marginTop='1rem' minWidth='200px'>
                            <Text fontSize='m' >number of activities</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'>{activityCounter()}</Text>
                        </Box>
                        <Box marginTop='1rem' minWidth='200px'>
                            <Text fontSize='m' >number of machines</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'>{machineCounter()}</Text>
                        </Box>
                    </Flex>
                </Box>

                <Center marginTop='3rem'>
                    <ConfirmDelete
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
        </VStack >
    )
}

export default Profile