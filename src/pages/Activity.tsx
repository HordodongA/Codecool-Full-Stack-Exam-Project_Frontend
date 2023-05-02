import { FC } from 'react'
import { useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AssetType, ActivityType, updateUserData } from '../states/userData'
// Import own components
import NavigateAndInfo from '../components/NavigateAndInfo'
import EditDocument from '../components/Modals/EditDocument'
// Import Chakra UI components
import { Box, Flex, Heading, Text, useToast, VStack } from '@chakra-ui/react'


export type ActivityForEditType = {
    name?: string,
    todos?: string
}

const Activity: FC = () => {

    const userData = useGlobal($userData)
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
                    <Box marginTop='0.5rem' w='100%'>
                        <Text fontSize='m' >name</Text>
                        <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisActivity?.name}</Text>
                    </Box>
                    {thisAsset?.name &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >asset</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisAsset?.name}</Text>
                        </Box>
                    }
                    {thisActivity?.todos &&
                        <Box marginTop='0.5rem' w='100%'>
                            <Text fontSize='m' >Todos</Text>
                            <Text textAlign='right' fontSize='xl' borderBottomWidth='medium'> {thisActivity?.todos}</Text>
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
                                    isClosable: true,
                                }),
                                onError: () => toast({
                                    title: 'Operation failed',
                                    description: "Something went wrong, please try again later.",
                                    status: 'error',
                                    duration: 5000,
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