import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $userData, updateUserData, UserDataType } from '../states/userData'
// Import components
import NavigateAndInfo from '../components/NavigateAndInfo'
import CreateDocument from '../components/Modals/CreateDocument'
// Import Chakra UI components
import { Flex, Center, VStack, Heading, useToast } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'


const Activities: FC = () => {

    const navigate = useNavigate()
    const userData = useGlobal($userData)
    const params = useParams()
    let thisAsset
    if (userData && userData.assets) {
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
    }
    console.log(thisAsset)

    const toast = useToast()
    const pushNew = (data: { name: string }) => {
        if (userData && userData.assets) {
            userData.assets[userData.assets.findIndex(asset => asset._id === params.asset)].activities?.push(data)
        }
    }


    return (
        <VStack width='100%' >
            <NavigateAndInfo help="activities" />

            <VStack maxWidth='95%' spacing='1.5rem'>
                <Heading as='h3' size='lg'>
                    Activities ({thisAsset?.name} asset)
                </Heading>

                <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='20px'>
                    {thisAsset && thisAsset.activities && thisAsset.activities.map((activity, i) => {
                        return (
                            <Center key={i} height='5rem' bg='gray.400' minWidth='260px' borderRadius='10px' onClick={() => navigate(activity._id!)}>
                                <Heading as='h4' size='md' textAlign='center'>
                                    {activity.name}
                                </Heading>
                            </Center>
                        )
                    })}
                </Flex>

                <Center paddingTop='1rem' >
                    {userData &&
                        <CreateDocument
                            userData={userData}
                            docType="activity"
                            pushNew={pushNew}
                            onConfirm={(data: UserDataType) => {
                                updateUserData(data, {
                                    onSuccess: () => toast({
                                        title: 'Operation successful',
                                        description: "Activity created",
                                        status: 'success',
                                        duration: 5000,
                                        position: 'bottom-left',
                                        isClosable: true,
                                    }),
                                    onError: () => toast({
                                        title: 'Operation failed',
                                        description: "Something went wrong, please try again later.",
                                        status: 'error',
                                        duration: 5000,
                                        position: 'bottom-left',
                                        isClosable: true,
                                    })
                                })
                            }}
                        />}
                </Center>
            </VStack>
        </VStack>
    )
}

export default Activities