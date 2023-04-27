import { FC } from 'react'
// import useGlobal from '../hooks/useGlobal'
// import { $userData } from '../states/userData'
// Import components
import NavigateAndInfo from '../components/NavigateAndInfo'
// Import Chakra UI components
import { Flex, Center, VStack, Heading } from '@chakra-ui/react'

// type PropsType = {
//     assetName: string
// }


// const Asset: FC<PropsType> = ({ assetName }) => {
const Asset: FC = () => {

    // const userData = useGlobal($userData)
    // ! tudni kellene: melyik assetben vagyunk?
    // if userdata / assets[].filter(asset.name === assetName).activities.length

    
    return (

        <VStack width='100%' >
            <NavigateAndInfo help="asset" />

            <VStack maxWidth='95%' spacing='2rem'>
                <Heading as='h3' size='lg'>
                    {/* {assetName} */}
                    ASSET displayed by name
                </Heading>

                <Flex direction='row' justifyContent='center' alignItems='center' wrap='wrap' gap='20px'>

                    <Center height='5rem' bg='gray.400' minWidth='260px' borderRadius='10px'>
                        <Heading as='h4' size='md' textAlign='center'>
                            Activities
                        </Heading>
                    </Center>
                    <Center height='5rem' bg='gray.400' minWidth='260px' borderRadius='10px'>
                        <Heading as='h4' size='md' textAlign='center'>
                            Machines
                        </Heading>
                    </Center>
                </Flex>

                <Center height='3rem' bg='gray.400' minWidth='260px' borderRadius='10px'>
                    <Heading as='h4' size='md' textAlign='center'>
                        show assets data
                    </Heading>
                </Center>
            </VStack>
        </VStack>

    )
}

export default Asset