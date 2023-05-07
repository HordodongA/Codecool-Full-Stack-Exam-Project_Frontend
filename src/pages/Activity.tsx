import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AssetType, ActivityType, updateUserData } from '../states/userData'
// Import own components
import NavigateAndInfo from '../components/NavigateAndInfo'
import EditDocument from '../components/Modals/EditDocument'
// Import Chakra UI components
import { Box, Flex, Heading, Text, useToast, VStack } from '@chakra-ui/react'


type ActivityForEditType = {
    name?: string,
    todos?: string
}

const Activity: FC = () => {

    const userData = useGlobal($userData)
    const navigate = useNavigate()
    const params = useParams()
    const toast = useToast()

    // Compose data for render and edit form
    let indexOfThisAsset: number
    let thisAsset: AssetType | undefined
    let indexOfThisActivity: number
    let thisActivity: ActivityType | undefined
    const thisActivityEmpty: ActivityForEditType = { name: "", todos: "" }
    let thisActivityForEdit: ActivityForEditType | undefined
    if (userData && userData.assets) {
        indexOfThisAsset = userData.assets.findIndex(asset => asset._id === params.asset)
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
        if (thisAsset.activities && userData.assets[indexOfThisAsset]) {
            indexOfThisActivity = thisAsset.activities.findIndex(activity => activity._id === params.activity)
            thisActivity = thisAsset.activities?.filter(activity => activity._id === params.activity)[0]
            let thisActivityFiltered = { ...thisActivity }
            delete thisActivityFiltered._id
            thisActivityForEdit = { ...thisActivityEmpty, ...thisActivityFiltered }
        }
    }

    useEffect(() => {
        if (!thisAsset) navigate(-1)
    }, [params])

    const updateActivity = (data: ActivityForEditType): void => {
        if (userData && userData.assets && userData.assets[indexOfThisAsset]) {
            userData.assets[indexOfThisAsset].activities![indexOfThisActivity] = { ...userData.assets[indexOfThisAsset].activities![indexOfThisActivity], ...data }
        }
    }

    return (
        <VStack width='100%' >
            <NavigateAndInfo help="activity" />

            <VStack minW='200' maxW='400' spacing='1.5rem'>
                <Heading as='h3' size='lg' textAlign='center' >
                    {thisActivity?.name} activity
                </Heading>
                <Flex marginTop='0.5rem' w='100%' direction='row' justifyContent='center' alignItems='center' wrap='wrap' columnGap='3rem' rowGap='0.5rem'>
                    {thisAsset?.name &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize={[ 'sm', 'md']} >asset</Text>
                            <Text textAlign='right' fontSize={[ 'md', 'xl']}  borderBottomWidth='thin' borderBottomColor='yellow1.800' > {thisAsset?.name}</Text>
                        </Box>
                    }
                    <Box marginTop='0.5rem' w='100%'>
                        <Text fontSize={[ 'sm', 'md']} >name</Text>
                        <Text textAlign='right' fontSize={[ 'md', 'xl']}  borderBottomWidth='thin' borderBottomColor='yellow1.800' > {thisActivity?.name}</Text>
                    </Box>
                    {thisActivity?.todos &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize={[ 'sm', 'md']} >Todos</Text>
                            <Text textAlign='right' fontSize={[ 'md', 'xl']}  borderBottomWidth='thin' borderBottomColor='yellow1.800'  whiteSpace='pre-wrap'> {thisActivity?.todos}</Text>
                        </Box>
                    }
                </Flex>

                {userData && thisActivityForEdit &&
                    <EditDocument
                        docType="activity"
                        dataForEdit={thisActivityForEdit}
                        updateAsset={updateActivity}
                        onConfirm={() => {
                            updateUserData(userData, {
                                onSuccess: () => toast({
                                    title: 'Operation successful',
                                    description: `${thisActivity?.name} activity successfully updated.`,
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

export default Activity