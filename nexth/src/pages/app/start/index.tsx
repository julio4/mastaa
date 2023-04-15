import { useState } from 'react'

import { Step } from '@/types/enums'
import Options from './options'
import { Box } from '@chakra-ui/react'

import { ChevronLeftIcon } from '@chakra-ui/icons'
import ContractAddress from './contractAddress'

import styles from '@/styles/start/index.module.css'
import Layout from '@/components/Layout/layout'

const Start = () => {
  return (
    <Layout>
      <Box className={styles.main}>
        <ContractAddress />
        <Options />
        <Box className={styles.chevronIcon}>
          <ChevronLeftIcon />
        </Box>
      </Box>
    </Layout>
  )
}

export default Start
