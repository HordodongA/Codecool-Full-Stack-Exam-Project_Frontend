import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AssetType } from '../states/userData'
// Import own components
import NavigateAndInfo from '../components/NavigateAndInfo'
// Import Chakra UI components
import { Flex, Center, VStack, Heading } from '@chakra-ui/react'


const Asset: FC = () => {

    const userData = useGlobal($userData)
    const navigate = useNavigate()
    const params = useParams()

    let thisAsset: AssetType | undefined
    if (userData && userData.assets) {
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
    }

    useEffect(() => {
        if (!thisAsset) navigate(-1)
    }, [params])

    return (
        <VStack width='100%' >
            <NavigateAndInfo help="asset" />

            <VStack maxWidth='95%' spacing='1.5rem'>
                <Heading as='h3' size='lg'>
                    {thisAsset?.name} asset
                </Heading>

                <Center height='2.5rem' bg='gray.400' minWidth='260px' borderRadius='10px'>
                    <Heading as='h4' size='md' textAlign='center' onClick={() => navigate("asset-data")}>
                        show assets data
                    </Heading>
                </Center>

                <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='20px'>
                    <Center height='5rem' bg='gray.400' minWidth='260px' borderRadius='10px' onClick={() => navigate("activities")}>
                        <Heading as='h4' size='md' textAlign='center'>
                            Activities
                        </Heading>
                    </Center>
                    <Center height='5rem' bg='gray.400' minWidth='260px' borderRadius='10px' onClick={() => navigate("machines")}>
                        <Heading as='h4' size='md' textAlign='center'>
                            Machines
                        </Heading>
                    </Center>
                    <Center height='5rem' bg='gray.300' color='gray.400' minWidth='260px' borderRadius='10px'>
                        <Heading as='h4' size='md' textAlign='center'>
                            Inspections
                        </Heading>
                    </Center>
                    <Center height='5rem' bg='gray.300' color='gray.400' minWidth='260px' borderRadius='10px'>
                        <Heading as='h4' size='md' textAlign='center'>
                            Cleaning
                        </Heading>
                    </Center>
                    <Center height='5rem' bg='gray.300' color='gray.400' minWidth='260px' borderRadius='10px'>
                        <Heading as='h4' size='md' textAlign='center'>
                            Care
                        </Heading>
                    </Center>
                    <Center height='5rem' bg='gray.300' color='gray.400' minWidth='260px' borderRadius='10px'>
                        <Heading as='h4' size='md' textAlign='center'>
                            Inventory
                        </Heading>
                    </Center>
                    <Center height='5rem' bg='gray.300' color='gray.400' minWidth='260px' borderRadius='10px'>
                        <Heading as='h4' size='md' textAlign='center'>
                            Administration
                        </Heading>
                    </Center>
                </Flex>
            </VStack>
        </VStack>
    )
}

export default Asset