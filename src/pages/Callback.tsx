import { FC, useEffect } from "react"
import { login } from "../states/user"
import { useNavigate } from "react-router-dom"
// Import Chakra UI components
import { Flex, Circle, Image, Heading, Spinner, useToast } from '@chakra-ui/react'


const Callback: FC = () => {

    const navigate = useNavigate()
    const toast = useToast()

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search)
        const code = urlSearchParams.get("code")

        if (code) login(code, {
            onSuccess: () => {
                toast({
                    title: 'Welcome to Landlord',
                    description: "Enjoy using our maintenance assistant",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                navigate("/assets")
            },
            onError: () => navigate("/")
        })
    }, [])


    return (

        <Flex direction='column' paddingTop='2%' alignItems='center'>
            <Circle marginBottom='1rem' boxShadow='dark-lg' size='200px' bg='gray.400' color='white'>
                <Image boxSize='200px' src='../../public/favicon.png' alt='../../public/favicon.png' />
            </Circle>

            <Heading as='h1' size='4xl'>
                landlord
            </Heading>
            <Heading as='h4' size='md'>
                maintenance assistant
            </Heading>

            <Heading as='h3' size='lg' margin='1rem 0'>
                Logging you in...
            </Heading>
            <Spinner
                thickness='5px'
                speed='0.5s'
                emptyColor='gray.300'
                color='blue.500'
                size='xl'
            />
        </Flex>

    )
}

export default Callback