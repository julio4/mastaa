import { Box, useColorModeValue, Heading } from '@chakra-ui/react'

import Layout from '@/components/Layout/layout_light'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import ContractAddress from '../start/contractAddress'
import { setOwnerAddress } from '@/store/reducers/paymasterSlice'
import { useDispatch } from 'react-redux'
import { ChangeEvent } from 'react'

const OwnerAddress = () => {
  const router = useRouter()
  let ownerAddress = ''
  const dispatch = useDispatch()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    ownerAddress = event.target.value
  }

  const moveToNextPage = () => {
    dispatch(setOwnerAddress(ownerAddress))
    router.push('/app/settings/ownerAddress')
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
          <ArrowLeftIcon color="pink" boxSize={7} onClick={() => router.push('/app/settings/inspectable')} _hover={{ cursor: 'pointer' }} />
          <Box
            position="relative"
            width={'100%'}
            display="flex"
            flexDirection={'column'}
            alignItems="center"
            padding="10"
            bg={useColorModeValue('white', 'blackAlpha.600')}
            margin={10}
            height={'80%'}>
            <Heading as="h2" size="2xl" fontWeight="bold" color={useColorModeValue('black', 'white')} textAlign="center" mb={'5%'} mt={'-5%'}>
              Owner Address
            </Heading>
            <ContractAddress onChange={handleInputChange} />
          </Box>
          <ArrowRightIcon color="pink" boxSize={7} onClick={moveToNextPage} _hover={{ cursor: 'pointer' }} />
        </Box>
      </Box>
    </Layout>
  )
}

export default OwnerAddress
