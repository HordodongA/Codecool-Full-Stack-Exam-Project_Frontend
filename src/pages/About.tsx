import { FC } from 'react'
// Import data for render
import { landlordApiDocsUrl, landlordBackendReadmeUrl, landlordFrontendReadmeUrl } from '../config'
// Import own components
import NavigateAndInfo from '../components/NavigateAndInfo'
// Import Chakra UI components
import { Box, VStack, Container, Center, Image, Heading, Text, Link } from '@chakra-ui/react'


const About: FC = () => {

    return (
        <VStack width='100%' spacing='0.5rem'>
            <NavigateAndInfo help="default" />

            <Center>
                <Image boxSize='100px' src='/favicon.png' alt='landlord logo' />
            </Center>

            <Heading as='h3' size='lg' textAlign='center' margin='1.5rem 0 1rem'>
                About
            </Heading>

            <Box minW={['100', '150', '300']} marginTop='1rem'>
                <Container maxW='4xl' marginTop='1rem'>
                    <Text textAlign='center' fontSize={['md', 'xl', '2xl']} >
                        Landlord is a maintenance assistant. It has come to life as a full-stack software developer school's exam project.
                        It aims to help in the maintenance of various properties, such as flats, houses, premises, vehicles, and so on,
                        by helping to collect information and todo lists in one place. The goal is to help optimize maintenance tasks,
                        minimize time requirements, maximize performance by making them planned, and prevent forgetting something.
                    </Text>
                    <Text textAlign='center' fontSize={['md', 'xl', '2xl']} fontWeight='bold'>
                        In the first milestone, two modules were built: Activities and Machines.
                    </Text>
                    <Text textAlign='center' fontSize={['md', 'xl', '2xl']} >
                        Planned future milestones will contain further modules, such as cleaning,
                        inspections, inventory, administration and billing, animal and plant maintenance.
                    </Text>
                    <Text textAlign='center' fontSize={['md', 'xl', '2xl']} fontWeight='bold' marginTop='1rem'>
                        Project uses the following technologies:
                    </Text>
                    <Text textAlign='center' fontSize={['md', 'xl', '2xl']} >
                        <b>Backend:</b> Node JS, TypeScript, Express, MongoDB,
                        Google OpenId authentication and stateless session management.{' '}
                        <Link href={landlordBackendReadmeUrl} isExternal color='blue.600'>
                            Landlord backend readme.
                        </Link> {' '}
                    </Text>
                    <Text textAlign='center' fontSize={['md', 'xl', '2xl']} >
                        <b>Frontend:</b> Vite React, TypeScript, Chakra UI.{' '}
                        <Link href={landlordFrontendReadmeUrl} isExternal color='blue.600'>
                            Landlord frontend readme.
                        </Link> {' '}
                    </Text>
                    <Text textAlign='center' fontSize={['md', 'xl', '2xl']} >
                        To see additional information see {' '}
                        <Link href={landlordApiDocsUrl} isExternal color='blue.600'>
                            OpenAPI 3.0 documentation.
                        </Link>
                    </Text>
                    <Text textAlign='center' fontSize={['md', 'xl', '2xl']} fontWeight='bold' marginTop='1rem'>
                        Contact developer:
                    </Text>
                    <Text textAlign='center' fontSize={['md', 'xl', '2xl']} >
                        gaborneubauer.hda@gmail.com
                    </Text>
                </Container>
            </Box>
        </VStack>
    )
}

export default About