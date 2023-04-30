import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AsseType, updateUserData, UserDataType } from '../states/userData'
// Import components
import NavigateAndInfo from '../components/NavigateAndInfo'
import CreateDocument from '../components/Modals/CreateDocument'
import ConfirmDeleteDocument from '../components/Modals/ConfirmDeleteDocument'
// Import Chakra UI components
import { Flex, Center, VStack, Heading, useToast } from '@chakra-ui/react'


const Machines: FC = () => {

    const userData = useGlobal($userData)
    const navigate = useNavigate()
    const params = useParams()
    const toast = useToast()

    let thisAsset: AsseType | undefined
    let indexOfThisAsset: number
    if (userData && userData.assets) {
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
        indexOfThisAsset = userData.assets.findIndex(asset => asset._id === params.asset)
    }

    const pushNew = (data: { name: string }) => {
        if (userData && userData.assets) {
            userData.assets[userData.assets.findIndex(asset => asset._id === params.asset)].machines?.push(data)
        }
    }

    const removeMachine = (i: number) => {
        if (userData && userData.assets) {
            const machines = userData.assets[indexOfThisAsset].machines
            if (machines) {
                const machinesWithoutCurrent = machines.filter((_activity, index) => index !== i)
                userData.assets[indexOfThisAsset].machines = machinesWithoutCurrent
            }
        }
    }


    return (
        <VStack width='100%' >
            <NavigateAndInfo help="machines" />

            <VStack maxWidth='95%' spacing='2rem'>
                <Heading as='h3' size='lg'>
                    Machines ({thisAsset?.name} asset)
                </Heading>

                <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='20px'>
                    {userData && thisAsset && thisAsset.machines && thisAsset.machines.map((machine, i) => {
                        return (
                            <Center key={i} height='5rem' bg='gray.400' minWidth='260px' borderRadius='10px'>
                                <Heading as='h4' size='md' textAlign='center' onClick={() => navigate(machine._id!)}>
                                    {machine.name}
                                </Heading>
                                <ConfirmDeleteDocument
                                    docType="asset"
                                    docName={machine.name}
                                    onConfirm={() => {
                                        removeMachine(i)
                                        updateUserData(userData, {
                                            onSuccess: () => toast({
                                                title: 'Operation successful',
                                                description: `${machine.name} machine successfully deleted.`,
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
                                        })
                                    }}
                                />
                            </Center>
                        )
                    })}
                </Flex>

                <Center paddingTop='1rem' >
                    {userData &&
                        <CreateDocument
                            userData={userData}
                            docType="machine"
                            pushNew={pushNew}
                            onConfirm={(data: UserDataType) => {
                                updateUserData(data, {
                                    onSuccess: () => toast({
                                        title: 'Operation successful',
                                        description: "Machine created",
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

export default Machines