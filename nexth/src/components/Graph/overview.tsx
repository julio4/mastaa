import { Button, useColorMode, useColorModeValue, Box, Heading } from '@chakra-ui/react'
import { use } from 'react'

import { FaEthereum } from 'react-icons/fa'

export default function Overview() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box height={'30%'} width={'100%'}>
      <Box position="relative" display="flex" justifyContent={'space-between'} height={'15%'} mb={14}>
        <Heading as="h1" size="xl" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
          Account Overview
        </Heading>
        <Box>
          <Button
            // bg={useColorModeValue("red.100", "BlackAlpha.900")}
            colorScheme={useColorModeValue('red', 'orange')}
            _hover={{
              bg: useColorModeValue('whiteAlpha.600', 'orange.300'),
              color: useColorModeValue('red', 'gray.900'),
            }}
            variant={'outline'}
            borderWidth={'2px'}
            borderRadius={'xl'}
            mr={4}>
            Withdraw
          </Button>
          <Button
            bg={useColorModeValue('red', 'orange.200')}
            _hover={{
              bg: useColorModeValue('red.600', 'orange.300'),
              color: useColorModeValue('white', 'gray.900'),
            }}
            color={useColorModeValue('white', 'gray.900')}
            borderWidth={'2px'}
            borderRadius={'xl'}>
            Deposit
          </Button>
        </Box>
      </Box>
      <Box position="relative" display="flex" justifyContent={'space-between'} height={'15%'}>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'whiteAlpha.600')}>
            My Balance
          </Heading>
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
            <span style={{ color: 'gray', fontSize: '0.8em' }}>ETH</span> <span style={{ color: 'white', fontSize: '1.5em' }}>3.45</span>
          </Heading>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'whiteAlpha.600')}>
            Total Spent
          </Heading>
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
            <span style={{ color: 'gray', fontSize: '0.8em' }}>ETH</span> <span style={{ color: 'white', fontSize: '1.5em' }}>12.08</span>
          </Heading>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'whiteAlpha.600')}>
            New Unique Users
          </Heading>
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')} fontSize={'1.5em'}>
            14
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
