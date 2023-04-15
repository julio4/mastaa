import { useEffect } from 'react'

import Options from './options'
import { Box, Heading } from '@chakra-ui/react'

import { ChevronLeftIcon } from '@chakra-ui/icons'
import ContractAddress from './contractAddress'

import styles from '@/styles/start/index.module.css'
import Layout from '@/components/Layout/layout'

import { useDispatch } from 'react-redux'
import { setStep } from '@/store/reducers/stepSlice'

const Start = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setStep(0))
  }, [])

  return (
    <Layout>
      <Box className={styles.main}>
        <Heading as="h4" size="lg">
          Choose if you want to sponsor gas or enable swap
        </Heading>
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
