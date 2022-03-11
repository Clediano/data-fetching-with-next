import { Button, Flex } from "@chakra-ui/react"

export const Pagination = ({ page, onPreviousPageClick, onNextPageClick }) => {
  return (
    <Flex direction='row' justifyContent='center' m='4'>
      <Button hidden={page === 1} colorScheme='teal' mx='2' onClick={onPreviousPageClick}>
        PREVIOUS PAGE
      </Button>
      <Button colorScheme='teal' mx='2' onClick={onNextPageClick}>
        NEXT PAGE
      </Button>
    </Flex>
  )
}