import { FC } from 'react'
import { useNavigate, Link, useLocation, useParams, useSearchParams } from "react-router-dom"
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

    // Get path segments for breadcrumbs
    const location = useLocation()
    console.log(location)
    // console.log(location.pathname)
    // console.log(location.pathname.split("/"))
    // console.log(location.pathname.split("/").filter(string => string !== ""))
    const breadcrumbSegments = location.pathname.split("/").filter(string => string !== "")
    console.log(breadcrumbSegments)
    // ? ['assets', '644bc8d58ebf76cbbbb9c4b7', 'activities', '644bc8d58ebf76cbbbb9c4b8']
    // const params = useParams()
    // console.log(params)
    // ! Az autogenerálós breadcrumb jól működik
    // ! Most az kellene bele, hogy az id-kat kicserélje a resource nevére


    return (
        <Flex minH='30px' p='0.5% 1%' mb='1rem' width='100%' justify='space-between' alignItems='center' bg='gray.400'>
            <IconButton
                aria-label='Search database'
                icon={<ChevronLeftIcon boxSize={6} />}
                size=''
                borderRadius='100'
                onClick={() => navigate(-1)}
            />


            <Breadcrumb fontWeight='medium' fontSize='sm' separator={<ChevronRightIcon color='gray.900' />}>
                // ? ['assets', '644bc8d58ebf76cbbbb9c4b7', 'activities', '644bc8d58ebf76cbbbb9c4b8']

                {breadcrumbSegments && breadcrumbSegments.map((segment, i) => {
                    let linkTo = ""
                    for (let j = 0; j < i + 1; j++) {
                        linkTo += "/" + breadcrumbSegments[j]
                        console.log(linkTo)
                    }
                    return (
                        <BreadcrumbItem key={i}>
                            <BreadcrumbLink as={Link} to={linkTo}>{segment}</BreadcrumbLink>
                        </BreadcrumbItem>
                    )
                })}
            </Breadcrumb>



            {/* <Breadcrumb fontWeight='medium' fontSize='sm' separator={<ChevronRightIcon color='gray.900' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/assets'>Assets</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/assets/asset'>Asset</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Current</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb> */}

            <InfoPanel help={help} />
        </Flex>
    )
}

export default NavigateAndInfo