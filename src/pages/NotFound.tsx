import { FC } from 'react'
import { useNavigate } from "react-router-dom"
// Import Chakra UI components
import { Stack, Flex, Button, Heading, Text, } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'


const NotFound: FC = () => {

    const navigate = useNavigate()


    return (
        <Stack minH='60vh' w='80vw' direction='column' spacing='6' align='center' justify='center'>
            <Heading as='h6' size='xs' color='gray.600'>Error 404</Heading>
            <Heading as='h2' marginTop='0' size='xl' color='gray.900'>Page not found</Heading>
            <Text fontSize='md'>Sorry, the page you are looking for doesn't exist or has been moved.</Text>

            <Flex direction='row' wrap='wrap' gap='6' align='center' justify='center' paddingTop='1rem'>
                <Button colorScheme='orange' variant='outline' leftIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
                    Go Back
                </Button>
                <Button colorScheme='orange' variant='solid' onClick={() => navigate("/assets")}>
                    Take me Home
                </Button>
            </Flex>
        </Stack>
    )
}

export default NotFound