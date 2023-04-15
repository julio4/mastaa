import Navbar from './navbar'
import Footer from './footer'
import { ReactNode } from 'react'

import { Flex, useColorModeValue, Box } from '@chakra-ui/react'
import ProgressionBar from '@/components/Layout/progressionBar'
import { Step } from '@/types/enums'

import styles from '@/styles/components/Layout/layout.module.css'

export default function Layout({ children }: { children: ReactNode }) {
  const activeStep = Step.Step1

  return (
    <Box height={'100vh'} bgGradient={useColorModeValue('radial(orange.200 5%, whiteAlpha.200 95%)', 'radial(orange.800 5%, whiteAlpha.200 95%)')}>
      <Flex flexDir="column" h="100vh" bg={useColorModeValue('blackAlpha.200', 'blackAlpha.600')}>
        <Navbar />
        <Box className={styles.wrapper}>
          <ProgressionBar activeStep={activeStep} />
          <Flex grow={1}>{children}</Flex>
        </Box>
        <Footer />
      </Flex>
    </Box>
  )
}
