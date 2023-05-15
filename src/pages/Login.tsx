import { FC } from 'react'
// Import data fro render
import { fullUrl } from "../config"
// Import Chakra UI components
import { Flex, Circle, Image, Heading, Link } from '@chakra-ui/react'


const Login: FC = () => {

    return (
        <Flex direction='column' paddingTop='5%' alignItems='center'>
            {/* <Circle marginBottom='3rem' boxShadow='dark-lg' size={['100', '200px', '300px']} bg='yellow2.500'> */}
            <Circle marginBottom='3rem' boxShadow='dark-lg' size={['100', '200px', '300px']} bgGradient='radial(yellow2.500, yellow2.300)'>
                <Image boxSize={['100', '200px', '300px']} src='/favicon.png' alt='Landlord logo' />
            </Circle>

            <Heading as='h3' textAlign='center' size={['md', 'lg']}>
                Welcome to
            </Heading>
            <Heading as='h1' textAlign='center' size={['lg', '4xl']}>
                landlord
            </Heading>
            <Heading as='h4' textAlign='center' size={['sm', 'md']}>
                maintenance assistant
            </Heading>

            <Link href={fullUrl} textAlign='center' fontSize={['1rem', '2rem']} fontWeight='semibold' color='blue.600' marginTop='2rem'>
                Login with Google
            </Link>
        </Flex>
    )
}

export default Login