import { FC } from 'react'
import { useNavigate, Link, useLocation } from "react-router-dom"
// Import own hooks and states
import useGlobal from '../hooks/useGlobal'
import { $userData, AssetType } from '../states/userData'
// Import own components
import InfoPanel from './Modals/InfoPanel'
// Import Chakra UI components
import { Flex, IconButton, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'


type ProprsType = {
    help: string
}

const NavigateAndInfo: FC<ProprsType> = ({ help }) => {

    const userData = useGlobal($userData)
    const navigate = useNavigate()

    // Generating data for breadcrumbs
    const breadcrumbDataComposer = (segmentArray: string[]): { linkTo: string, linkText: string }[] => {
        // @ts-ignore
        let assetIndex: number | undefined
        let asset: AssetType | undefined
        let breadcrumbData: { linkTo: string, linkText: string }[] = []

        segmentArray.map((segment, i) => {
            let linkTo: string = ""
            for (let j = 0; j < i + 1; j++) {
                linkTo += "/" + segmentArray[j]
            }
            let linkText: string | undefined = segment
            if (segmentArray[i - 1] === "assets") {
                assetIndex = userData?.assets?.findIndex(asset => asset._id === segment)
                asset = userData?.assets?.find(asset => asset._id === segment)
                linkText = asset?.name
            }
            if (segmentArray[i - 1] === "activities") {
                linkText = asset?.activities?.find(activity => activity._id === segment)?.name
            }
            if (segmentArray[i - 1] === "machines") {
                linkText = asset?.machines?.find(machine => machine._id === segment)?.name
            }
            if (linkText === undefined) linkText = segment
            breadcrumbData.push({ linkTo, linkText })
        })
        return breadcrumbData
    }

    const location = useLocation()
    const breadcrumbSegments: string[] = location.pathname.split("/").filter(string => string !== "")
    const breadcrumbData = breadcrumbDataComposer(breadcrumbSegments)


    return (
        <Flex minH='30px' p='0.5% 1%' mb='1rem' width='100%' justify='space-between' alignItems='center' bg='yellow2.600'>
            <IconButton
                aria-label='Search database'
                icon={<ChevronLeftIcon boxSize={6} />}
                size=''
                borderRadius='100'
                marginRight='10px'
                bg='yellow1.800'
                color='yellow1.100'
                onClick={() => navigate(-1)}
            />

            <Breadcrumb color='yellow2.900' fontWeight='medium' fontSize={['xs', 'sm']} overflow='hidden' letterSpacing='wider' separator={<ChevronRightIcon color='yellow2.800' />}>
                {breadcrumbData && breadcrumbData.map((entry, i) => {
                    return (
                        <BreadcrumbItem key={i} lineHeight='90%'>
                            <BreadcrumbLink as={Link} to={entry.linkTo}>{entry.linkText}</BreadcrumbLink>
                        </BreadcrumbItem>
                    )
                })}
            </Breadcrumb>

            <InfoPanel help={help} />
        </Flex>
    )
}

export default NavigateAndInfo