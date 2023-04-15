import { useRouter } from 'next/router'
import { Box, SimpleGrid } from '@chakra-ui/react'

import styles from '@/styles/start/options.module.css'
import TextCard from '@/components/textCard'

const Options = () => {
  const router = useRouter()

  return (
    <Box className={styles.wrapper}>
      <SimpleGrid className={styles.grid} spacing={20} columns={2} paddingX={20}>
        <TextCard title={'Sponsor'} summary={'Pay gas for your users'} onClick={() => router.push('/app/sybil-protection')} />
        <TextCard title={'Swap'} summary={'User can pay gas with another token than ETH'} onClick={() => {}} />
      </SimpleGrid>
    </Box>
  )
}

export default Options
