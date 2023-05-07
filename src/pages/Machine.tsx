import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AssetType, MachineType, updateUserData } from '../states/userData'
// Import Components
import NavigateAndInfo from '../components/NavigateAndInfo'
import EditDocument from '../components/Modals/EditDocument'
// Import Chakra UI components
import { Box, Flex, Heading, Text, useToast, VStack } from '@chakra-ui/react'


type MachineForEditType = {
    name?: string,
    type?: string,
    unique_id?: string,
    service?: string,
    todos?: string
}

const Machine: FC = () => {

    const userData = useGlobal($userData)
    const navigate = useNavigate()
    const params = useParams()
    const toast = useToast()

    // Compose data for render and edit form
    let indexOfThisAsset: number
    let thisAsset: AssetType | undefined
    let indexOfThisMachine: number
    let thisMachine: MachineType | undefined
    const thisMachineEmpty: MachineForEditType = { name: "", type: "", unique_id: "", service: "", todos: "" }
    let thisMachineForEdit: MachineForEditType | undefined
    if (userData && userData.assets) {
        indexOfThisAsset = userData.assets.findIndex(asset => asset._id === params.asset)
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
        if (thisAsset.machines && userData.assets[indexOfThisAsset]) {
            indexOfThisMachine = thisAsset.machines.findIndex(machine => machine._id === params.machine)
            thisMachine = thisAsset.machines.filter(machine => machine._id === params.machine)[0]
            let thisMachineFiltered = { ...thisMachine }
            delete thisMachineFiltered._id
            thisMachineForEdit = { ...thisMachineEmpty, ...thisMachineFiltered }
        }
    }

    useEffect(() => {
        if (!thisAsset) navigate(-1)
    }, [params])

    const updateMachine = (data: MachineForEditType): void => {
        if (userData && userData.assets && userData.assets[indexOfThisAsset]) {
            userData.assets[indexOfThisAsset].machines![indexOfThisMachine] = { ...userData.assets[indexOfThisAsset].machines![indexOfThisMachine], ...data }
        }
    }


    return (
        <VStack width='100%' >
            <NavigateAndInfo help="machine" />

            <VStack minW='200' maxW='400' spacing='1.5rem'>
                <Heading as='h3' size='lg' textAlign='center' >
                    {thisMachine?.name} machine
                </Heading>
                <Flex marginTop='0.5rem' w='100%' direction='row' justifyContent='center' alignItems='center' wrap='wrap' columnGap='3rem' rowGap='0.5rem'>
                    {thisAsset?.name &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize={[ 'sm', 'md']} >asset</Text>
                            <Text textAlign='right' fontSize={[ 'md', 'xl']} borderBottomWidth='thin' borderBottomColor='yellow1.800' > {thisAsset?.name}</Text>
                        </Box>
                    }

                    {thisMachine && Object.keys(thisMachine).filter(key => key !== "_id").map((key, i) => {
                        return (
                            <Box key={i} marginTop='0.5rem' w='100%' whiteSpace='pre-wrap'>
                                <Text fontSize={[ 'sm', 'md']}>{key}</Text>
                                <Text textAlign='right' fontSize={[ 'md', 'xl']} borderBottomWidth='thin' borderBottomColor='yellow1.800' >{(thisMachine as MachineForEditType)[key as keyof typeof thisMachine]}</Text>
                            </Box>
                        )
                    })}
                </Flex>

                {userData && thisMachineForEdit &&
                    <EditDocument
                        docType="machine"
                        dataForEdit={thisMachineForEdit}
                        updateAsset={updateMachine}
                        onConfirm={() => {
                            updateUserData(userData, {
                                onSuccess: () => toast({
                                    title: 'Operation successful',
                                    description: `${thisMachine?.name} machine successfully updated.`,
                                    status: 'success',
                                    duration: 5000,
                                    position: 'bottom-left',
                                    isClosable: true,
                                }),
                                onError: () => toast({
                                    title: 'Operation failed',
                                    description: "Something went wrong, please try again later.",
                                    status: 'error',
                                    duration: 5000,
                                    position: 'bottom-left',
                                    isClosable: true,
                                })
                            })
                        }}
                    />
                }
            </VStack>
        </VStack >
    )
}

export default Machine