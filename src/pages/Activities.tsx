import { FC, useEffect } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $userData, downloadUserData, /*  updateUserData, UserDataType */ } from '../states/userData'
// Import components
import NavigateAndInfo from '../components/NavigateAndInfo'
// import CreateDocument from '../components/Modals/CreateDocument'
// Import Chakra UI components
import { Flex, Center, VStack, Heading/* , useToast */ } from '@chakra-ui/react'


const Activities: FC = () => {

    // useEffect(() => {
    //     downloadUserData()
    // }, [])

    const userData = useGlobal($userData)
    console.log(userData)

    // ? CREATE NEW DOCUMENT
        // const toast = useToast()
        // console.log(userData)    // ! KONZULTÁCIÓ 3/3
        // ! KONZULTÁCIÓ 3/2 - túl bonyolult?
        // const pushNew = (data: { name: string }) => userData?.assets?.push(data)

    // ? RENDERING PAGE
        // get asset id from url
        // get asset object[]
        // const asset = userData?.assets.filter(asset => asset.id === assetId)  // visszaad egy arrayt
        // vagy ebből a változóból dolgozok, vagy kinyerem az indexetés azt mappelem

    return (
        <VStack width='100%' >
            <NavigateAndInfo help="activities" />

            <VStack maxWidth='95%' spacing='2rem'>
                <Heading as='h3' size='lg'>
                    nameOfAsset + 's activities'
                </Heading>

                <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='20px'>
                    {userData && userData.assets && userData.assets[0].activities && userData.assets[0].activities.map((activity, i) => {
                        return (
                            <Center key={i} height='5rem' bg='gray.400' minWidth='260px' borderRadius='10px'>
                                <Heading as='h4' size='md' textAlign='center'>
                                    {activity.name}
                                </Heading>
                            </Center>
                        )
                    })}
                </Flex>

                <Center paddingTop='1rem' >
                    <Heading>
                        CREATE DOCUMENT
                    </Heading>
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

export default Activities