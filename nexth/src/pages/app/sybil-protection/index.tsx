import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

import styles from '@/styles/sybil-protection/index.module.css'
import Layout from '@/components/Layout/layout'
import CustomCard from '@/components/customCard'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { setStep } from '@/store/reducers/stepSlice'

const Sybil = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setStep(1))
  }, [])

  return (
    <Layout>
      <Box className={styles.wrapper}>
        <Heading as="h4" size="lg">
          Choose a sybil protection
        </Heading>
        <SimpleGrid className={styles.grid} spacing={20} columns={3} paddingX={20}>
          <CustomCard title={'Worldcoin'} summary={'blabla'} onClick={() => {}} />
          <CustomCard title={'Sismo'} summary={'blabla'} onClick={() => {}} />
          <CustomCard title={'Gitcoin passport'} summary={'blabla'} onClick={() => {}} />
        </SimpleGrid>
      </Box>
    </Layout>
  )
}

export default Sybil
