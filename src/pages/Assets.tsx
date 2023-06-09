import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, updateUserData, UserDataType } from '../states/userData'
// Import own components
import NavigateAndInfo from '../components/NavigateAndInfo'
import CreateDocument from '../components/Modals/CreateDocument'
import ConfirmDeleteDocument from '../components/Modals/ConfirmDeleteDocument'
// Import Chakra UI components
import { Flex, Center, VStack, Heading, useToast } from '@chakra-ui/react'


const Assets: FC = () => {

    const userData = useGlobal($userData)
    const navigate = useNavigate()
    const toast = useToast()

    const pushNew = (data: { name: string }) => { if (userData && userData.assets) { userData.assets.push(data) } }

    const removeAsset = (i: number) => {
        if (userData && userData.assets) {
            const assetsWithoutCurrent = userData.assets.filter((_asset, index) => index !== i)
            userData.assets = assetsWithoutCurrent
        }
    }


    return (
        <VStack width='100%' >
            <NavigateAndInfo help="assets" />

            <VStack maxWidth='95%' spacing='1.5rem'>
                <Heading as='h3' size='lg'>
                    My Assets
                </Heading>

                <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='20px'>
                    {userData && userData.assets && userData.assets.map((asset, i) => {
                        return (
                            <Flex key={i} height={['3rem', '5rem']} width={['200px', '260px']} alignItems='center' border='4px' borderColor ='yellow3.800' borderRadius='10px' padding='10px 40px 10px 10px' bgGradient='linear(to-r, yellow3.800, yellow3.600)' color='yellow2.200' _hover={{ cursor: 'pointer', boxShadow: 'lg' }} onClick={() => navigate(asset._id!)}>
                                <Heading as='h4' size={['sm', 'md']} textAlign='left'>
                                    {asset.name}
                                </Heading>
                                <ConfirmDeleteDocument
                                    docType="asset"
                                    docName={asset.name}
                                    onConfirm={() => {
                                        removeAsset(i)
                                        updateUserData(userData, {
                                            onSuccess: () => toast({
                                                title: 'Operation successful',
                                                description: `${asset.name} asset successfully deleted.`,
                                                status: 'warning',
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
                                />
                            </Flex>
                        )
                    })}
                </Flex>

                <Center paddingTop='1rem' >
                    {userData &&
                        <CreateDocument
                            userData={userData}
                            docType="asset"
                            pushNew={pushNew}
                            onConfirm={(data: UserDataType) => {
                                updateUserData(data, {
                                    onSuccess: () => toast({
                                        title: 'Operation successful',
                                        description: "Asset created",
                                        status: 'warning',
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

export default Assets