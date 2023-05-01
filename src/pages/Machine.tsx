import { FC } from 'react'
import { useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AssetType, MachineType } from '../states/userData'
// Import Components
import NavigateAndInfo from '../components/NavigateAndInfo'
// Import Chakra UI components
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'


const Machine: FC = () => {

    const userData = useGlobal($userData)
    const params = useParams()
    let thisAsset: AssetType | undefined
    let thisMachine: MachineType | undefined
    if (userData && userData.assets) {
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
        thisMachine = thisAsset.machines?.filter(machine => machine._id === params.machine)[0]
    }


    return (
        <VStack width='100%' >
            <NavigateAndInfo help="machine" />

            <VStack minW='200' maxW='400' spacing='1.5rem'>
                <Heading as='h3' size='lg' textAlign='center' >
                    {thisMachine?.name} machine
                </Heading>
                <Flex marginTop='0.5rem' w='100%' direction='row' justifyContent='center' alignItems='center' wrap='wrap' columnGap='3rem' rowGap='0.5rem'>
                    <Box marginTop='0.5rem' w='100%'>
                        <Text fontSize='m' >name</Text>
                        <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisMachine?.name}</Text>
                    </Box>
                    {thisAsset?.name &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >asset</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisAsset?.name}</Text>
                        </Box>
                    }
                    {thisMachine?.type &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >type</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisMachine?.type}</Text>
                        </Box>
                    }
                    {thisMachine?.unique_id &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >unique identifier</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisMachine?.unique_id}</Text>
                        </Box>
                    }
                    {thisMachine?.service &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >service / mechanic</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisMachine?.service}</Text>
                        </Box>
                    }
                    {thisMachine?.todos &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >Inspection list</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisMachine?.todos}</Text>
                        </Box>
                    }
                </Flex>

                <Heading>
                    EDIT MACHINE
                </Heading>
            </VStack>
        </VStack >
    )
}

export default Machine