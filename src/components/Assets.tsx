import { FC, useEffect } from 'react'
import useGlobal from '../hooks/useGlobal'
import { Routes, Route } from "react-router-dom"
import { $userData, downloadUserData, updateUserData } from '../states/userData'
import { deleteUser } from '../states/user'
// Import Components
import NotFound from './NotFound'
// Import Chakra UI components
import { Flex, Center, VStack, /* SimpleGrid, */ Wrap, WrapItem, Button, Heading } from '@chakra-ui/react'



const Assets: FC = () => {

    let userData = useGlobal($userData)

    useEffect(() => {
        downloadUserData()
    }, [])


    return (

        <Flex p='2% 2%' bg='gray.300' >

            <Routes>
                <Route path="/" element={
                    <>
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
                                        <Center key={i} height='4rem' bg='gray.400' minWidth='300px' borderRadius='10px'>
                                            <Heading as='h4' size='md' textAlign='center'>
                                                {asset.name}
                                            </Heading>
                                        </Center>
                                    )
                                })}

                            </Flex>

                            <Center height='4rem' bg='gray.400' minWidth='300px' borderRadius='10px'>
                                <Heading as='h4' size='md' textAlign='center'>
                                    + Add new asset
                                </Heading>
                            </Center>


                            <Wrap spacing={4}>
                                <WrapItem>
                                    <Button colorScheme='green' onClick={updateUserData}>UPDATE DATA TEST</Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button colorScheme='red' onClick={deleteUser}>DELETE USER TEST</Button>
                                </WrapItem>
                            </Wrap>

                        </VStack>
                    </>



                } />
                <Route path="/test" element={<div>***** TEST *****</div>} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </Flex>

    )
}

export default Assets