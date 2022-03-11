import { useRouter } from 'next/router'
import { SearchIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'

export const Header = ({ text, onChangeText, onSearch }) => {
  const router = useRouter();

  return (
    <Flex
      direction='row'
      justifyContent='start'
      alignItems='center'
      w='full'
      px='4'
      py='6'
      bg='gray.50'
      boxShadow='base'
    >
      <Image onClick={() => router.replace('/')} src='/images/pexel.svg' alt='Pexel logo' h={16} w={16} cursor='pointer' />
      {onChangeText && <InputGroup mx='28' size='lg'>
        <InputLeftElement
          pointerEvents='none'
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color='gray.300' />}
        />
        <Input
          value={text}
          onChange={e => onChangeText(e.target.value)}
          variant='flushed'
          placeholder='Search for an image'
        />
        <InputRightElement width='4.5rem'>
          <IconButton
            colorScheme='teal'
            aria-label='Search photos'
            icon={<SearchIcon />}
            onClick={onSearch}
          />
        </InputRightElement>
      </InputGroup>}
    </Flex>
  )
}
