import Navbar from './navbar'
import Footer from './footer'
import { ReactNode } from 'react'

import { Flex, Box } from '@chakra-ui/react'
import ProgressionBar from '@/components/Layout/progressionBar'

import styles from '@/styles/components/Layout/layout.module.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box height={'100vh'} className={styles.color}>
      <Flex flexDir="column" h="100vh">
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
