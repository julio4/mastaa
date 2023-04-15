import { Box, useColorModeValue, Heading, Switch } from '@chakra-ui/react'

import Layout from '@/components/Layout/layout_light'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setImmutability } from '@/store/reducers/paymasterSlice'

const Immutability = () => {
  const router = useRouter()
  let immutabilityChecked = false
  const dispatch = useDispatch()

  const setImmutabilityChecked = (event) => {
    immutabilityChecked = event.target.checked
  }

  const moveToNextPage = () => {
    dispatch(setImmutability(immutabilityChecked))
    router.push('/app/settings/inspectable')
  }

  return (
    <Layout>
      <Box height="100%" width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box
          position="relative"
          width={'80vw'}
          display="flex"
          alignItems="center"
          padding="10"
          pt={20}
          borderRadius={'2xl'}
          bg={useColorModeValue('white', 'blackAlpha.600')}
          boxShadow="lg"
          margin={10}
          height={'80%'}>
          <ArrowLeftIcon color="pink" boxSize={7} onClick={() => router.push('/app/settings')} _hover={{ cursor: 'pointer' }} />
          <Box
            position="relative"
            width={'100%'}
            display="flex"
            flexDirection={'column'}
            alignItems="center"
            padding="10"
            bg={useColorModeValue('white', 'blackAlpha.600')}
            margin={10}
            height={'100%'}>
            <Heading as="h2" size="2xl" fontWeight="bold" color={useColorModeValue('black', 'white')} textAlign="center" mb={'5%'} mt={'-5%'}>
              Immutability
            </Heading>
            <Switch marginTop={'8vh'} size={'lg'} colorScheme="pink" onChange={setImmutabilityChecked} />
          </Box>
          <ArrowRightIcon color="pink" boxSize={7} onClick={moveToNextPage} _hover={{ cursor: 'pointer' }} />
        </Box>
      </Box>
    </Layout>
  )
}

export default Immutability
