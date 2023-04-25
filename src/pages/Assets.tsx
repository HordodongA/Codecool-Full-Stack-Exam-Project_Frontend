import { FC, useEffect } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $userData, downloadUserData, updateUserData } from '../states/userData'
// Import components
import CreateDocument from '../components/Modals/CreateDocument'
// Import Chakra UI components
import { Flex, Center, VStack, Wrap, WrapItem, Heading, useToast } from '@chakra-ui/react'


const Assets: FC = () => {

    useEffect(() => {
        downloadUserData()
    }, [])

    const userData = useGlobal($userData)
    const toast = useToast()


    return (

        <Flex >
            <VStack spacing='5%'>
                <Heading as='h3' size='lg'>
                    My Assets
                </Heading>

                <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='20px'>
                    {userData && userData.assets && userData.assets.map((asset, i) => {
                        return (
                            <Center key={i} height='5rem' bg='gray.400' minWidth='260px' borderRadius='10px'>
                                <Heading as='h4' size='md' textAlign='center'>
                                    {asset.name}
                                </Heading>
                            </Center>
                        )
                    })}
                </Flex>

                <Center paddingTop='1rem' >
                    <CreateDocument
                        docType="asset"
                        onConfirm={() => updateUserData({
                            onSuccess: () => toast({
                                title: 'Operation successful',
                                description: "Asset created",
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

            </VStack>
        </Flex>

    )
}

export default Assets