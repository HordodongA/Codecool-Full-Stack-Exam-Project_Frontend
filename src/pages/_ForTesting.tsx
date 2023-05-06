import { FC } from 'react'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, updateUserData } from '../states/userData'
// Import data for render
import { testData } from '../config'
// Import Chakra UI components
import { Box, VStack, Container, Center, Image, Heading, Text, Button, useToast } from '@chakra-ui/react'


const _ForTesting: FC = () => {

    const userData = useGlobal($userData)
    const toast = useToast()
    console.log(userData)

    const setTestData = (): void => {
        if (userData) {
            userData.assets = testData.assets
            updateUserData(userData, {
                onSuccess: () => toast({
                    title: 'Operation successful',
                    description: 'Your account successfully updated with test data.',
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
        }
    }


    return (
        <VStack marginTop='2rem' spacing='2rem'>
            <Center>
                <Image boxSize='100px' src='../../public/test.png' alt='test icon' />
            </Center>
            <Heading as='h3' size='lg' textAlign='center' marginTop='1rem'>
                Test data for assessment process
            </Heading>
            <Box minW='350' >
                <Container maxW='4xl' >
                    <Text textAlign='center' fontSize='2xl' >
                        When you use this application for rating and assessment purpose,
                        you don't need to spend time with upload data via the user interface.
                    </Text>
                    <Text textAlign='center' fontSize='2xl' >
                        Just hit the button below and your account will be filled with some data you need to explore application.
                    </Text>
                    <Text textAlign='center' fontSize='2xl' color='red.500' fontWeight='bold' >
                        Warning! It overwrites your existing data with the test values.
                    </Text>
                </Container>
            </Box >
            <Center>
                <Button
                    colorScheme='orange'
                    onClick={setTestData}
                >
                    give me test data
                </Button>
            </Center>
        </VStack >
    )
}

export default _ForTesting