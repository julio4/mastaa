import { Button, useColorMode, useColorModeValue, Box, Heading } from '@chakra-ui/react'
import { use } from 'react'

import { FaEthereum } from 'react-icons/fa'

export default function Overview() {
  return (
    <Box
      height={'30%'}
      width={'100%'}
      borderRadius={'2xl'}
      padding={10}
      backgroundColor={useColorModeValue('rgba(248, 225, 189, 0.14)', 'rgba(192, 73, 26, 0.25)')}
      boxShadow="lg"
      mb={'2%'}>
      <Box position="relative" display="flex" justifyContent={'space-between'} height={'15%'} mb={14}>
        <Heading as="h1" size="xl" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
          Account Overview
        </Heading>
        <Box>
          <Button
            // bg={useColorModeValue("red.100", "BlackAlpha.900")}
            colorScheme={useColorModeValue('red', 'orange')}
            _hover={{
              bg: useColorModeValue('pink.100', 'orange.300'),
              color: useColorModeValue('red', 'gray.900'),
            }}
            _focus={{
              bg: useColorModeValue('pink.100', 'orange.300'),
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
            _focus={{
              bg: useColorModeValue('red.600', 'orange.300'),
              color: useColorModeValue('white', 'gray.900'),
            }}
            borderWidth={'2px'}
            borderRadius={'xl'}>
            Deposit
          </Button>
        </Box>
      </Box>
      <Box position="relative" display="flex" justifyContent={'space-between'} height={'15%'}>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
            My Balance
          </Heading>
          <Box display={'flex'} flexDirection={'row'} color={useColorModeValue('gray.700', 'gray.100')}>
            <Heading as="h2" mb={4} fontSize={'0.8em'} mr={2}>
              ETH
            </Heading>
            <Heading fontSize={'1.5em'}>3.45</Heading>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
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
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
            Unique Users Today
          </Heading>
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')} fontSize={'1.5em'}>
            84
          </Heading>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
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
