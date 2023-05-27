import { FC } from 'react'
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
        if (!thisAsset) navigate(-1)
    }


    return (
        <VStack width='100%' >
            <NavigateAndInfo help="asset" />

            <VStack maxWidth='95%' spacing='1.5rem'>
                <Heading as='h3' size='lg'>
                    {thisAsset?.name} asset
                </Heading>

                <Flex height={['1,25rem', '2.5rem']} width={['200px', '260px']} alignItems='center' justifyContent='center' border='4px' borderColor ='yellow3.800' borderRadius='10px' padding='10px' bg='yellow3.900' color='yellow2.200' _hover={{ cursor: 'pointer', boxShadow: 'lg' }} onClick={() => navigate("asset-data")}>
                    <Heading as='h4' size={['sm', 'md']} textAlign='center' >
                        show asset's data
                    </Heading>
                </Flex>

                <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='20px'>
                    <Flex height={['3rem', '5rem']} width={['200px', '260px']} alignItems='center' justifyContent='center' border='4px' borderColor ='yellow3.800' borderRadius='10px' padding='10px' bgGradient='linear(to-r, yellow3.700, yellow3.800, yellow3.700)' color='yellow2.200' onClick={() => navigate("activities")} _hover={{ cursor: 'pointer', boxShadow: 'lg' }}>
                        <Heading as='h4' size={['sm', 'md']} textAlign='center'>
                            Activities
                        </Heading>
                    </Flex>
                    <Flex height={['3rem', '5rem']} width={['200px', '260px']} alignItems='center' justifyContent='center' border='4px' borderColor ='yellow3.800' borderRadius='10px' padding='10px' bgGradient='linear(to-r, yellow3.700, yellow3.800, yellow3.700)' color='yellow2.200' onClick={() => navigate("machines")} _hover={{ cursor: 'pointer', boxShadow: 'lg' }}>
                        <Heading as='h4' size={['sm', 'md']} textAlign='center'>
                            Machines
                        </Heading>
                    </Flex>
                    <Flex height={['3rem', '5rem']} width={['200px', '260px']} alignItems='center' justifyContent='center' border='4px' borderColor ='yellow3.400' borderRadius='10px' padding='10px' bgGradient='linear(to-r, yellow3.300, yellow3.400, yellow3.300)' color='yellow2.200' _hover={{ cursor: 'no-drop', boxShadow: 'lg' }}>
                        <Heading as='h4' size={['sm', 'md']} textAlign='center'>
                            Inspections
                        </Heading>
                    </Flex>
                    <Flex height={['3rem', '5rem']} width={['200px', '260px']} alignItems='center' justifyContent='center' border='4px' borderColor ='yellow3.400' borderRadius='10px' padding='10px' bgGradient='linear(to-r, yellow3.300, yellow3.400, yellow3.300)' color='yellow2.200' _hover={{ cursor: 'no-drop', boxShadow: 'lg' }}>
                        <Heading as='h4' size={['sm', 'md']} textAlign='center'>
                            Cleaning
                        </Heading>
                    </Flex>
                    <Flex height={['3rem', '5rem']} width={['200px', '260px']} alignItems='center' justifyContent='center' border='4px' borderColor ='yellow3.400' borderRadius='10px' padding='10px' bgGradient='linear(to-r, yellow3.300, yellow3.400, yellow3.300)' color='yellow2.200' _hover={{ cursor: 'no-drop', boxShadow: 'lg' }}>
                        <Heading as='h4' size={['sm', 'md']} textAlign='center'>
                            Care
                        </Heading>
                    </Flex>
                    <Flex height={['3rem', '5rem']} width={['200px', '260px']} alignItems='center' justifyContent='center' border='4px' borderColor ='yellow3.400' borderRadius='10px' padding='10px' bgGradient='linear(to-r, yellow3.300, yellow3.400, yellow3.300)' color='yellow2.200' _hover={{ cursor: 'no-drop', boxShadow: 'lg' }}>
                        <Heading as='h4' size={['sm', 'md']} textAlign='center'>
                            Inventory
                        </Heading>
                    </Flex>
                    <Flex height={['3rem', '5rem']} width={['200px', '260px']} alignItems='center' justifyContent='center' border='4px' borderColor ='yellow3.400' borderRadius='10px' padding='10px' bgGradient='linear(to-r, yellow3.300, yellow3.400, yellow3.300)' color='yellow2.200' _hover={{ cursor: 'no-drop', boxShadow: 'lg' }}>
                        <Heading as='h4' size={['sm', 'md']} textAlign='center'>
                            Administration
                        </Heading>
                    </Flex>
                </Flex>
            </VStack>
        </VStack>
    )
}

export default Asset