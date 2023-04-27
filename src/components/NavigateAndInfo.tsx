import { FC } from 'react'
import { useNavigate, Link } from "react-router-dom"
// Import components
import InfoPanel from './Modals/InfoPanel'
// Import Chakra UI components
import { Flex, IconButton } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

type ProprsType = {
    help: string
}

const NavigateAndInfo: FC<ProprsType> = ({ help }) => {

    const navigate = useNavigate()


    return (

        <Flex minH='30px' p='0.5% 1%' mb='2rem' width='100%' justify='space-between' alignItems='center' bg='gray.400'>
            <IconButton
                aria-label='Search database'
                icon={<ChevronLeftIcon boxSize={6} />}
                size=''
                borderRadius='100'
                onClick={() => navigate(-1)}
            />

            <Breadcrumb fontWeight='medium' fontSize='sm' separator={<ChevronRightIcon color='gray.900' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/assets'>Assets</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/assets/asset'>Asset</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Current</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <InfoPanel help={help} />
        </Flex>

    )
}

export default NavigateAndInfo