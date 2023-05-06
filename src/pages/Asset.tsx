import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AssetType } from '../states/userData'
// Import own components
import NavigateAndInfo from '../components/NavigateAndInfo'
// Import Chakra UI components
import { Flex, VStack, Heading } from '@chakra-ui/react'


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

                <Flex height='2.5rem' width='260px' alignItems='center' justifyContent='center' borderRadius='10px' padding='10px' bg='yellow3.900' color='yellow2.200' _hover={{ cursor: 'pointer', boxShadow: 'lg' }}>
                    <Heading as='h4' size='md' textAlign='center' onClick={() => navigate("asset-data")}>
                        show asset's data
                    </Heading>
                </Flex>

                <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='20px'>
                    <Flex height='5rem' width='260px' alignItems='center' justifyContent='center' borderRadius='10px' padding='10px' bg='yellow3.800' color='yellow2.200' onClick={() => navigate("activities")} _hover={{ cursor: 'pointer', boxShadow: 'lg' }}>
                        <Heading as='h4' size='md' textAlign='center'>
                            Activities
                        </Heading>
                    </Flex>
                    <Flex height='5rem' width='260px' alignItems='center' justifyContent='center' borderRadius='10px' padding='10px' bg='yellow3.800' color='yellow2.200' onClick={() => navigate("machines")} _hover={{ cursor: 'pointer', boxShadow: 'lg' }}>
                        <Heading as='h4' size='md' textAlign='center'>
                            Machines
                        </Heading>
                    </Flex>
                    <Flex height='5rem' width='260px' alignItems='center' justifyContent='center' borderRadius='10px' padding='10px' bg='yellow3.400' color='yellow2.200' _hover={{ cursor: 'no-drop', boxShadow: 'lg' }}>
                        <Heading as='h4' size='md' textAlign='center'>
                            Inspections
                        </Heading>
                    </Flex>
                    <Flex height='5rem' width='260px' alignItems='center' justifyContent='center' borderRadius='10px' padding='10px' bg='yellow3.400' color='yellow2.200' _hover={{ cursor: 'no-drop', boxShadow: 'lg' }}>
                        <Heading as='h4' size='md' textAlign='center'>
                            Cleaning
                        </Heading>
                    </Flex>
                    <Flex height='5rem' width='260px' alignItems='center' justifyContent='center' borderRadius='10px' padding='10px' bg='yellow3.400' color='yellow2.200' _hover={{ cursor: 'no-drop', boxShadow: 'lg' }}>
                        <Heading as='h4' size='md' textAlign='center'>
                            Care
                        </Heading>
                    </Flex>
                    <Flex height='5rem' width='260px' alignItems='center' justifyContent='center' borderRadius='10px' padding='10px' bg='yellow3.400' color='yellow2.200' _hover={{ cursor: 'no-drop', boxShadow: 'lg' }}>
                        <Heading as='h4' size='md' textAlign='center'>
                            Inventory
                        </Heading>
                    </Flex>
                    <Flex height='5rem' width='260px' alignItems='center' justifyContent='center' borderRadius='10px' padding='10px' bg='yellow3.400' color='yellow2.200' _hover={{ cursor: 'no-drop', boxShadow: 'lg' }}>
                        <Heading as='h4' size='md' textAlign='center'>
                            Administration
                        </Heading>
                    </Flex>
                </Flex>
            </VStack>
        </VStack>
    )
}

export default Asset