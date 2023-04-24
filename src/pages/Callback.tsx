import { FC, useEffect } from "react"
import { login } from "../states/user"
import { useNavigate } from "react-router-dom"
// Import Chakra UI components
import { VStack, Heading, Spinner } from '@chakra-ui/react'


const Callback: FC = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search)
        const code = urlSearchParams.get("code")

        if (code) login(code, {
            onSuccess: () => navigate("/assets"),
            onError: () => navigate("/")
        })
    }, [])


    return (

        <VStack>
            <Heading as='h3' size='lg'>
                Logging you in...
            </Heading>

            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </VStack>

    )
}

export default Callback