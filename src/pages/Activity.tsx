import { FC } from 'react'
import { useParams } from 'react-router-dom'
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AsseType, ActivityType } from '../states/userData'
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
    let thisActivity: ActivityType | undefined
    if (userData && userData.assets) {
        thisAsset = userData.assets.filter(asset => asset._id === params.asset)[0]
        thisActivity = thisAsset.activities?.filter(activity => activity._id === params.activity)[0]
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

                {/* EDIT MACHINE */}

                {/* DELETE MACHINE: EDIT LOGIKA KELL MAJD */}
                <Center paddingTop='2rem'>
                    <ConfirmDelete
                        docType="activity"
                        docName={thisActivity!.name}
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
                            description: `${thisActivity?.name} successfully removed from ${thisAsset?.name} asset.`,
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        })}
                    />
                </Center>
            </VStack>
        </VStack >
    )
}

export default Machine