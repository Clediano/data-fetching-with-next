import { Grid, GridItem, Skeleton } from '@chakra-ui/react'

export const Loading = () => {
    return (
        <Grid h='full' p='4' templateRows='repeat(6, 1fr)' templateColumns='repeat(6, 1fr)' gap='4'>
            <GridItem rowSpan={3} colSpan={3}>
                <Skeleton h='full' w='full' />
            </GridItem>
            <GridItem rowSpan={3} colSpan={3}>
                <Skeleton h='full' w='full' />
            </GridItem>
            <GridItem rowSpan={3} colSpan={3}>
                <Skeleton h='full' w='full' />
            </GridItem>
            <GridItem rowSpan={3} colSpan={3}>
                <Skeleton h='full' w='full' />
            </GridItem>
        </Grid>
    )
}
