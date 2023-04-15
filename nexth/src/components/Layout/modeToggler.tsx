import { Color } from '@/types/theme'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function ModeToggler() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      bg={useColorModeValue(Color.LightGray, 'whiteAlpha.200')}
      _hover={{
        bg: useColorModeValue(Color.DarkerGray, 'whiteAlpha.300'),
      }}
      onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
