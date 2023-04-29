import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $userData/*, updateUserData, UserDataType */ } from '../states/userData'      // ? CREATE NEW DOCUMENT
// Import components
import NavigateAndInfo from '../components/NavigateAndInfo'
// import CreateDocument from '../components/Modals/CreateDocument'                    // ? CREATE NEW DOCUMENT
// Import Chakra UI components
import { Flex, Center, VStack, Heading/* , useToast */ } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'


const Machines: FC = () => {

    const navigate = useNavigate()
    const userData = useGlobal($userData)
    const params = useParams()
    let thisAsset
    if (userData && userData.assets) {
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
        // console.log(thisAsset)
    }

    // ? CREATE NEW DOCUMENT
    // const toast = useToast()
    // const pushNew = (data: { name: string }) => userData?.assets?.push(data)


    return (
        <VStack width='100%' >
            <NavigateAndInfo help="machines" />

            <VStack maxWidth='95%' spacing='2rem'>
                <Heading as='h3' size='lg'>
                    Machines ({thisAsset?.name} asset)
                </Heading>

                <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='20px'>
                    {thisAsset && thisAsset.machines && thisAsset.machines.map((machine, i) => {
                        return (
                            <Center key={i} height='5rem' bg='gray.400' minWidth='260px' borderRadius='10px' onClick={() => navigate(machine._id!)}>
                                <Heading as='h4' size='md' textAlign='center'>
                                    {machine.name}
                                </Heading>
                            </Center>
                        )
                    })}
                </Flex>

                <Center paddingTop='1rem' >
                    <Heading>
                        CREATE DOCUMENT
                    </Heading>                 // ? CREATE NEW DOCUMENT
                    {/* <CreateDocument
                        userData={userData}
                        docType="asset"
                        pushNew={pushNew}
                        onConfirm={(data: UserDataType) => {
                            updateUserData(data, {
                                onSuccess: () => toast({
                                    title: 'Operation successful',
                                    description: "Asset created",
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
                        }
                        }
                    /> */}
                </Center>
            </VStack>
        </VStack>
    )
}

export default Machines