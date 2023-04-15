import { Button, useColorMode, useColorModeValue, Box, Heading } from '@chakra-ui/react'
import ImageCard from '@/components/imageCard'

import { FaEthereum } from 'react-icons/fa'
import worldcoin from '@public/worldcoin.svg'
import sismo from '@public/sismo.jpg'
import gitcoin from '@public/gitcoin.svg'

export default function Overview() {
  return (
    <Box
      height={'30%'}
      width={'100%'}
      borderRadius={'2xl'}
      padding={10}
      backgroundColor={useColorModeValue('rgba(248, 225, 189, 0.14)', 'rgba(192, 73, 26, 0.25)')}
      boxShadow="lg"
      mb={'10%'}>
      <Box position="relative" display="flex" justifyContent={'space-between'} height={'15%'} mb={14}>
        <Heading as="h1" size="xl" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
          Manage your plugins
        </Heading>
      </Box>
      <Box position="relative" display="flex" justifyContent={'space-between'} height={'15%'}>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'whiteAlpha.600')}>
            Verification System
          </Heading>
          <Box display={'flex'} flexDirection={'row'} color={useColorModeValue('gray.700', 'gray.100')}>
            <ImageCard title={'Worldcoin'} lightModeImage={worldcoin} blackModeImage={worldcoin} summary={'blabla'} onClick={() => {}} />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'whiteAlpha.600')}>
            Total Spent
          </Heading>
          <Box display={'flex'} flexDirection={'row'} color={useColorModeValue('gray.700', 'gray.100')}>
            <Heading as="h2" mb={4} fontSize={'0.8em'} mr={2}>
              ETH
            </Heading>
            <Heading fontSize={'1.5em'}>14.87</Heading>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'whiteAlpha.600')}>
            Unique Users Today
          </Heading>
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')} fontSize={'1.5em'}>
            84
          </Heading>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'whiteAlpha.600')}>
            Chain Deployed
          </Heading>
          <Box display="flex" flexDirection="row">
            <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
              Ethereum
            </Heading>
            <FaEthereum style={{ marginLeft: '0.5em', marginTop: '0.2em' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
