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
        <VStack width='100%' spacing='0.5rem'>
            <NavigateAndInfo help="profile" />

            <Center >
                <Avatar size='xl' name={user?.name} src={user?.picture} />
            </Center>

            <Box minW='200' maxW='400' paddingTop='2rem'>
                <Heading as='h3' size='lg' textAlign='center' >
                    My Profile
                </Heading>
                <Flex marginTop='0.5rem' w='100%' direction='row' justifyContent='center' alignItems='center' wrap='wrap' columnGap='3rem' rowGap='0.5rem'>
                    <Box marginTop='0.5rem' w='100%'>
                        <Text fontSize='m' >name</Text>
                        <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'>{user?.name}</Text>
                    </Box>
                    <Box marginTop='0.5rem' w='100%'>
                        <Text fontSize='m' >email</Text>
                        <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'>{user?.email}</Text>
                    </Box>
                </Flex>
            </Box>

            <Box minW='170' maxW='300' paddingTop='2rem'>
                <Heading as='h3' size='lg' textAlign='center' >
                    My Statistics
                </Heading>
                <Flex marginTop='0.5rem' w='100%' direction='row' justifyContent='center' alignItems='center' wrap='wrap' columnGap='3rem' rowGap='0.5rem'>
                    <Box marginTop='0.5rem' w='100%'>
                        <Text fontSize='m' >number of assets</Text>
                        <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'>{assetCounter()}</Text>
                    </Box>
                    <Box marginTop='0.5rem' w='100%'>
                        <Text fontSize='m' >number of activities</Text>
                        <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'>{activityCounter()}</Text>
                    </Box>
                    <Box marginTop='0.5rem' w='100%'>
                        <Text fontSize='m' >number of machines</Text>
                        <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'>{machineCounter()}</Text>
                    </Box>
                </Flex>
            </Box>

            <Center paddingTop='2rem'>
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
        </VStack >
    )
}

export default Profile