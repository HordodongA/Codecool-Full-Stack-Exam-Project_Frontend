import { FC } from 'react'
import { useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AssetType, updateUserData } from '../states/userData'
// Import own components
import NavigateAndInfo from '../components/NavigateAndInfo'
import EditDocument from '../components/Modals/EditDocument'
// Import Chakra UI components
import { Box, Flex, VStack, Heading, Text, useToast } from '@chakra-ui/react'


export type AssetForEditType = {
    name?: string,
    address?: string,
    details?: string,
    credentials?: string,
    notes?: string
}

const AssetData: FC = () => {

    const userData = useGlobal($userData)
    const params = useParams()
    const toast = useToast()

    // Compose data for render and edit form
    let indexOfThisAsset: number
    let thisAsset: AssetType | undefined
    const thisAssetEmpty: AssetForEditType = { name: "", address: "", details: "", credentials: "", notes: "" }
    let thisAssetForEdit: AssetForEditType | undefined
    if (userData && userData.assets) {
        indexOfThisAsset = userData.assets.findIndex(asset => asset._id === params.asset)
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
        let thisAssetFiltered = { ...thisAsset }
            delete thisAssetFiltered?._id
            delete thisAssetFiltered?.activities
            delete thisAssetFiltered?.machines
        thisAssetForEdit = { ...thisAssetEmpty, ...thisAssetFiltered }
    }

    const updateAsset = (data: AssetForEditType): void => {
        if (userData && userData.assets) {
            userData.assets[indexOfThisAsset] = { ...userData.assets[indexOfThisAsset], ...data }
        }
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

                {userData && thisAssetForEdit &&
                    <EditDocument
                        docType="asset"
                        dataForEdit={thisAssetForEdit}
                        updateAsset={updateAsset}
                        onConfirm={() => {
                            updateUserData(userData, {
                                onSuccess: () => toast({
                                    title: 'Operation successful',
                                    description: `${thisAsset?.name} asset successfully updated.`,
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

export default AssetData