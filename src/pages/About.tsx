import { FC } from 'react'
// Import Chakra UI components
import { Box, Container, Center, Image, Heading, Text } from '@chakra-ui/react'


const About: FC = () => {
    return (

        <Box >
            <Center>
                <Image boxSize='100px' src='../../public/favicon.png' alt='../../public/favicon.png' />
            </Center>

            <Heading as='h3' size='lg' textAlign='center' margin='1.5rem 0 1rem'>
                About
            </Heading>

            <Box minW='350' marginTop='1rem'>
                <Container maxW='4xl' marginTop='1rem'>
                    <Text textAlign='center' fontSize='2xl' >
                        Landlord is a maintenance assistant. It helps you to note todos
                        and other informations of your properties (called assets).
                        It's made in a programming school exam project
                        in Codecool Hungary Full Stack API developer bootcamp.
                    </Text>
                    <Text textAlign='center' fontSize='2xl' fontWeight='bold' marginTop='1rem'>
                        Project uses the following technologies:
                    </Text>
                    <Text textAlign='center' fontSize='2xl' >
                        Backend: Node JS, TypeScript, Express, MongoDB,
                        Google Oauth2 authenticaton and stateless session management.
                        Frontend: React, TypeScript, Chakra UI.
                    </Text>
                    <Text textAlign='center' fontSize='2xl' fontWeight='bold' marginTop='1rem'>
                        Contact developer:
                    </Text>
                    <Text textAlign='center' fontSize='2xl' >
                        gaborneubauer.hda@gmail.com
                    </Text>
                </Container>
            </Box>

        </Box>

    )
}

export default About