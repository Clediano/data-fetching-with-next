import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter();

  return (
    <Flex height="100vh" justifyContent='center'>
      <Box flexDirection='column' display='flex' justifyContent='space-around' alignItems='center' h='full'>

        <Box p={5} shadow='md' borderWidth='1px' w='md'>
          <Heading fontSize='xl'>SSR - Server Side Rendering</Heading>
          <Box display='flex' flexDirection='column' w='full' pt='3'>
            <Button colorScheme='teal' onClick={() => router.push('/SSR/1')}>SSR</Button>
          </Box>
        </Box>

        <Box p={5} shadow='md' borderWidth='1px' w='md'>
          <Heading fontSize='xl'>SSG - Static Site Generation</Heading>
          <Box display='flex' flexDirection='column' w='full' pt='3'>
            <Button colorScheme='teal' onClick={() => router.push('/SSG')}>SSG</Button>
          </Box>
        </Box>

        <Box p={5} shadow='md' borderWidth='1px' w='md'>
          <Heading fontSize='xl'>CSR - Client Side Render</Heading>
          <Box display='flex' flexDirection='column' w='full' pt='3'>
            <Button colorScheme='teal' onClick={() => router.push('/CSR')}>CSR</Button>
          </Box>
        </Box>

        <Box p={5} shadow='md' borderWidth='1px' w='md'>
          <Heading fontSize='xl'>ISR - Incremental Static Regeneration</Heading>
          <Box display='flex' flexDirection='column' w='full' pt='3'>
            <Button colorScheme='teal' onClick={() => router.push('/ISR/1')}>ISR</Button>
          </Box>
        </Box>

      </Box>
    </Flex>
  )
}
export default Index
