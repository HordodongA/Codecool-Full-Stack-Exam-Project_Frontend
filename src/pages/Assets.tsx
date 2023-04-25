import { FC, useEffect } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $userData, downloadUserData, updateUserData } from '../states/userData'
// Import Chakra UI components
import { Flex, Center, VStack, Wrap, WrapItem, Button, Heading } from '@chakra-ui/react'


const Assets: FC = () => {

    useEffect(() => {
        downloadUserData()
    }, [])

    const userData = useGlobal($userData)


    return (

        <Flex >
            <VStack spacing='3%'>
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

                <Center height='3rem' bg='gray.400' minWidth='260px' borderRadius='10px'>
                    <Heading as='h4' size='md' textAlign='center'>
                        + Add new asset
                    </Heading>
                </Center>

                <Wrap spacing={4}>
                    <WrapItem>
                        <Button colorScheme='green' onClick={updateUserData}>TEST: UPDATE DATA</Button>
                    </WrapItem>
                </Wrap>
            </VStack>
        </Flex>

    )
}

export default Assets