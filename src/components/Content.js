import { Box, Center, Image, SimpleGrid, Text } from '@chakra-ui/react'

import { Loading } from './Loading'

export const Content = ({ photos }) => {
  return (
    <>
      {photos?.length === 0 ? (
        <Loading />
      ) : photos ? (
        <SimpleGrid columns={5} spacing={5}>
          {photos?.map(photo => {
            return (
              <Box key={photo.id}>
                <Image alt={photo.url} src={photo.src.original} m='4' />
              </Box>
            )
          })}
        </SimpleGrid>
      ) : (
        <Center h='full'>
          <Text fontSize='lg'>No photo to display</Text>
        </Center>
      )
      }
    </>
  )
}
