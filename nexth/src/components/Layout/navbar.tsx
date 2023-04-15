import { Flex, Spacer, Box, Link, IconButton, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import ModeToggler from './modeToggler'

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      boxShadow={'3px 7px 10px rgba(0, 0, 0, 0.2)'}
      padding="1.5rem"
      bgGradient={useColorModeValue('linear(to-r, orange.100, whiteAlpha.200)', 'linear(to-r, orange.800, whiteAlpha.400)')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          aria-label="Open menu"
          size="lg"
          icon={<HamburgerIcon />}
          backgroundColor="transparent"
          _hover={{ backgroundColor: 'transparent' }}
        />
      </Box>
      <Box>
        <Link href="/" fontSize="2xl" fontWeight="bold">
          Mastaa マスター
        </Link>
      </Box>
      <Spacer />
      <Box display={{ base: 'none', md: 'block' }}>
        <Link href="/about" mr={6}>
          About
        </Link>
        <ModeToggler />
      </Box>

      {/* <Box display={{
        base: "none",
        md: "block"
      }}>
        <Button
          size="lg"
          icon={<HamburgerIcon />}
          backgroundColor="transparent"
          _hover={{ backgroundColor: "transparent" }}
          href="/dashboard"
        />
      </Box> */}
    </Flex>
  )
}

export default Navbar
