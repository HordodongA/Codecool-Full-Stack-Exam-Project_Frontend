import type { FC } from 'react'
// Import Chakra UI components
import { Flex, Heading } from '@chakra-ui/react'


const Footer: FC = () => {

    return (

        <Flex as='nav' p='0.5% 2%' width='100%' justify='center' bg='gray.300'>
            <Heading as='h6' size='xs'>  © HdA 2023  </Heading>
        </Flex>

    )
}

export default Footer