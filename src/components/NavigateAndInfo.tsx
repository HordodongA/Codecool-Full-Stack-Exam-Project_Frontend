import { FC } from 'react'
import { useNavigate, Link, useLocation, useParams } from "react-router-dom"
// Import components
import InfoPanel from './Modals/InfoPanel'
// Import Chakra UI components
import { Flex, IconButton } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { $userData, AssetType } from '../states/userData'
import useGlobal from '../hooks/useGlobal'


type ProprsType = {
    help: string
}

const NavigateAndInfo: FC<ProprsType> = ({ help }) => {

    const navigate = useNavigate()
    const userData = useGlobal($userData)
    let assetIndex: number | undefined
    let asset: AssetType | undefined

    // Get path segments for breadcrumbs
    const location = useLocation()
    // console.log(location)
    // console.log(location.pathname)
    // console.log(location.pathname.split("/"))
    // console.log(location.pathname.split("/").filter(string => string !== ""))
    const breadcrumbSegments = location.pathname.split("/").filter(string => string !== "")
    // console.log(breadcrumbSegments)
    // ? ['assets', '644bc8d58ebf76cbbbb9c4b7', 'activities', '644bc8d58ebf76cbbbb9c4b8']
    // const params = useParams()
    // console.log(params)


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

                {userData && breadcrumbSegments && breadcrumbSegments.map((segment, i) => {
                    let linkTo: string = ""
                    for (let j = 0; j < i + 1; j++) {
                        linkTo += "/" + breadcrumbSegments[j]
                    }
                    let linkText: string | undefined = ""
                    linkText = segment
                    if (breadcrumbSegments[i - 1] === "assets") {
                        assetIndex = userData.assets?.findIndex(asset => asset._id === segment)
                        asset = userData.assets?.find(asset => asset._id === segment)
                        linkText = asset?.name
                    }
                    if (breadcrumbSegments[i - 1] === "activities") {
                        linkText = asset?.activities?.find(activity => activity._id === segment)?.name
                    }
                    if (breadcrumbSegments[i - 1] === "machines") {
                        linkText = asset?.machines?.find(machine => machine._id === segment)?.name
                    }

                    return (
                        <BreadcrumbItem key={i}>
                            <BreadcrumbLink as={Link} to={linkTo}>{linkText}</BreadcrumbLink>
                        </BreadcrumbItem>
                    )
                })}
            </Breadcrumb>

            <InfoPanel help={help} />
        </Flex>
    )
}

export default NavigateAndInfo