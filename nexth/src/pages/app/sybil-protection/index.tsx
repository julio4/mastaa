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
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'7vh'} padding={'10vh 0 0 0'}>
        <Heading as="h4" size="lg">
          Choose a sybil protection
        </Heading>
        <SimpleGrid spacing={20} columns={3} paddingX={20}>
          <ImageCard title={'Worldcoin'} lightModeImage={worldcoin} blackModeImage={worldcoin} summary={'blabla'} onClick={() => {}} />
          <ImageCard title={'Sismo'} lightModeImage={sismo} blackModeImage={sismo} summary={'blabla'} onClick={() => {}} />
          <ImageCard title={'Gitcoin passport'} lightModeImage={gitcoin} blackModeImage={gitcoin} summary={'blabla'} onClick={() => {}} />
        </SimpleGrid>
      </Box>
    </Layout>
  )
}

export default Sybil
