import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

import Layout from '@/components/Layout/layout'
import ImageCard from '@/components/imageCard'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { setStep } from '@/store/reducers/stepSlice'

import worldcoin from '@public/worldcoin.svg'
import sismo from '@public/sismo.jpg'
import gitcoin from '@public/gitcoin.svg'

const Sybil = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setStep(1))
  }, [])

  return (
    <Layout>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'7vh'} padding={'10vh 0 0 0'} flexWrap={'wrap'}>
        <Heading as="h4" size="lg">
          Choose a sybil protection
        </Heading>
        <SimpleGrid spacing={20} columns={3} paddingX={20}>
          <ImageCard lightModeImage={worldcoin} blackModeImage={worldcoin} />
          <ImageCard lightModeImage={sismo} blackModeImage={sismo} />
          <ImageCard lightModeImage={gitcoin} blackModeImage={gitcoin} />
        </SimpleGrid>
      </Box>
    </Layout>
  )
}

export default Sybil
