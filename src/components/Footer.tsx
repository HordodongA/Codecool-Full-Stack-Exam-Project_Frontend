import type { FC } from 'react'
// Import Chakra UI components
import { Flex, Heading } from '@chakra-ui/react'


const Footer: FC = () => {

    return (
        <Flex as='footer' p='0.3% 2%' width='100%' justify='center' bg='yellow1.600' marginTop='auto' backgroundImage={'public/background.jpg'}>
            <Heading as='h6' size='xs' color='yellow2.400'>  © HdA 2023  </Heading>
        </Flex>
    )
}

export default Footer