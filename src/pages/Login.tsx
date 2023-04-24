import { FC } from 'react'
import { fullUrl } from "../config"
// Import Chakra UI components
import { Box, Flex, Center, Circle, Image, Heading, Link } from '@chakra-ui/react'


const Login: FC = () => {

    return (

        <Flex paddingTop='5%' alignItems='center'>
            <Box>
                <Circle boxShadow='dark-lg' size='300px' bg='gray.400' color='white'>
                    <Image boxSize='300px' src='../../public/favicon.png' alt='../../public/favicon.png' />
                </Circle>

                <Center flexDirection='column' marginTop='2rem' >
                    <Heading as='h3' size='lg'>
                        Welcome to
                    </Heading>
                    <Heading as='h1' size='4xl'>
                        landlord
                    </Heading>
                    <Heading as='h4' size='md'>
                        maintenance assist
                    </Heading>

                    <Link href={fullUrl} fontSize='2rem' fontWeight='semibold' color='blue.500' marginTop='1rem'>
                        Login with Google
                    </Link>
                </Center>
            </Box>
        </Flex>

    )
}

export default Login