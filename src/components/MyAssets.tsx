import { FC } from 'react'
import useGlobal from '../hooks/useGlobal'
import { $userData, updateUserData } from '../states/userData'
// Import Chakra UI components
import { /* Box, SimpleGrid, */ Flex, Center, VStack, Wrap, WrapItem, Button, Heading } from '@chakra-ui/react'


const MyAssets: FC = () => {

    let userData = useGlobal($userData)


    return (

        <Flex >
            <VStack spacing='3%'>

                <Heading as='h3' size='lg'>
                    My Assets
                </Heading>

                {/* <SimpleGrid spacing='30px' minChildWidth='300px' >
                    <Box bg='tomato' height='80px'></Box>
                    <Box bg='tomato' height='80px'></Box>
                    <Box bg='tomato' height='80px'></Box>
                    <Box bg='tomato' height='80px'></Box>
                    <Box bg='tomato' height='80px'></Box>
                    <Box bg='tomato' height='80px'></Box>
                </SimpleGrid> */}

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

export default MyAssets