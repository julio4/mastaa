import { useRouter } from 'next/router'
import { Heading } from '@chakra-ui/react'
import { Box, SimpleGrid } from '@chakra-ui/react'

import styles from '@/styles/start/options.module.css'
import CustomCard from '@/components/customCard'

const Options = () => {
  const router = useRouter()

  return (
    <Box className={styles.wrapper}>
      <SimpleGrid className={styles.grid} spacing={20} columns={2} paddingX={20}>
        <CustomCard title={'Sponsor'} summary={'Pay gas for your users'} onClick={() => router.push('/app/sybil-protection')} />
        <CustomCard title={'Swap'} summary={'User can pay gas with another token than ETH'} onClick={() => {}} />
      </SimpleGrid>
    </Box>
  )
}

export default Options
