import { FC } from 'react'
import { useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AssetType } from '../states/userData'
// Import own components
import NavigateAndInfo from '../components/NavigateAndInfo'
// Import Chakra UI components
import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react'


const AssetData: FC = () => {

    const userData = useGlobal($userData)
    const params = useParams()
    
    let thisAsset: AssetType | undefined
    if (userData && userData.assets) {
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
    }


    return (
        <VStack width='100%' >
            <NavigateAndInfo help="asset" />

            <VStack minW='200' maxW='400' spacing='1.5rem'>
                <Heading as='h3' size='lg' textAlign='center' >
                    {thisAsset?.name} asset
                </Heading>
                <Flex marginTop='0.5rem' w='100%' direction='row' justifyContent='center' alignItems='center' wrap='wrap' columnGap='3rem' rowGap='0.5rem'>
                    <Box marginTop='0.5rem' w='100%'>
                        <Text fontSize='m' >name</Text>
                        <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisAsset?.name}</Text>
                    </Box>
                    {thisAsset?.address &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >address</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisAsset?.address}</Text>
                        </Box>
                    }
                    {thisAsset?.details &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >details</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisAsset?.details}</Text>
                        </Box>
                    }
                    {thisAsset?.credentials &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >credentials</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisAsset?.credentials}</Text>
                        </Box>
                    }
                    {thisAsset?.notes &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >notes</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisAsset?.notes}</Text>
                        </Box>
                    }
                </Flex>

                <Heading>
                    EDIT ASSET
                </Heading>

            </VStack>
        </VStack >
    )
}

export default AssetData