import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
// Import own hooks and states
import { login } from "../states/user"
// Import Chakra UI components
import { Flex, Circle, Image, Heading, Spinner, useToast } from '@chakra-ui/react'


const Callback: FC = () => {

    const navigate = useNavigate()
    const toast = useToast()


    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search)
        const code = urlSearchParams.get("code")

        if (document.referrer === "") {
            navigate("/", { replace: true });
        }

        if (code) login(code, {
            onSuccess: () => {
                toast({
                    title: 'Welcome to Landlord',
                    description: "Enjoy using our maintenance assistant",
                    status: 'success',
                    duration: 5000,
                    position: 'bottom-left',
                    isClosable: true,
                })
                navigate("/assets", { replace: true })
            },
            onError: () => navigate("/", { replace: true })
        })
    }, [])


    return (
        <Flex direction='column' paddingTop='2%' alignItems='center'>
            <Circle marginBottom='1rem' boxShadow='dark-lg' size={['100', '200px', '300px']} bg='yellow2.500' >
                <Image boxSize={['100', '200px', '300px']} src='/favicon.png' alt='Landlord logo' />
            </Circle>

            <Heading as='h1' textAlign='center' size={['lg', '4xl']}>
                landlord
            </Heading>
            <Heading as='h4' textAlign='center' size={['sm', 'md']}>
                maintenance assistant
            </Heading>

            <Heading as='h3' textAlign='center' size={['sm', 'md', 'lg']} margin='1rem 0'>
                Logging you in...
            </Heading>
            <Spinner
                thickness='5px'
                speed='0.5s'
                emptyColor='yellow3.100'
                color='yellow3.500'
                size='xl'
            />
        </Flex>
    )
}

export default Callback