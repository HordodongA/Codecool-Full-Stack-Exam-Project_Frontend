import { FC } from 'react'
import { useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AsseType, MachineType } from '../states/userData'
// Import Components
import NavigateAndInfo from '../components/NavigateAndInfo'
import ConfirmDelete from '../components/Modals/ConfirmDelete'
// Import Chakra UI components
import { Box, Flex, Center, Heading, Text, useToast, VStack } from '@chakra-ui/react'


const Machine: FC = () => {

    const userData = useGlobal($userData)
    const toast = useToast()
    const params = useParams()
    console.log("params", params)
    let thisAsset: AsseType | undefined
    let thisMachine: MachineType | undefined
    if (userData && userData.assets) {
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
        thisMachine = thisAsset.machines?.filter(machine => machine._id === params.machine)[0]
    }

    return (
        <VStack width='100%' spacing='0.5rem'>
            <NavigateAndInfo help="profile" />

            <Box minW='200' maxW='400' paddingTop='2rem'>
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
            </Box>

            {/* EDIT MACHINE */}

            {/* DELETE MACHINE: EDIT LOGIKA KELL MAJD */}
            <Center paddingTop='2rem'>
                <ConfirmDelete
                    docType="machine"
                    docName={thisMachine!.name}
                    // onConfirm={() => deleteUser({
                    //     onSuccess: () => toast({
                    //         title: 'Operation successful',
                    //         description: "Data successfully deleted from our system.",
                    //         status: 'success',
                    //         duration: 5000,
                    //         isClosable: true,
                    //     }),
                    //     onError: () => toast({
                    //         title: 'Operation failed',
                    //         description: "Something went wrong, please try again later.",
                    //         status: 'error',
                    //         duration: 5000,
                    //         isClosable: true,
                    //     })
                    // })}
                    onConfirm={() => toast({
                        title: 'Operation successful',
                        description: `${thisMachine?.name} successfully removed from ${thisAsset?.name} asset.`,
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })}
                />
            </Center>
        </VStack >
    )
}

export default Machine