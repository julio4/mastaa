import Navbar from './navbar'
import Footer from './footer'
import { ReactNode } from 'react'

import { Flex, Box, useColorModeValue } from '@chakra-ui/react'
import ProgressionBar from '@/components/Layout/progressionBar'

import styles from '@/styles/components/Layout/layout.module.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box height={'100vh'} bgGradient={useColorModeValue('radial(orange.200 5%, whiteAlpha.200 95%)', 'radial(orange.800 5%, whiteAlpha.200 95%)')}>
      <Flex flexDir="column" h="100vh" bg={useColorModeValue('blackAlpha.200', 'blackAlpha.600')}>
        <Navbar />
        <Box className={styles.wrapper}>
          <ProgressionBar />
          <Flex grow={1}>{children}</Flex>
        </Box>
        <Footer />
      </Flex>
    </Box>
  )
}
