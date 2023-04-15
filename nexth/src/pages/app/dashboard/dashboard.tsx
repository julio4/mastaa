import { Text, Flex, Heading, Button, useColorModeValue, Box, SimpleGrid, Input } from '@chakra-ui/react'
import { ethers } from 'ethers'

import UserHelped from '@/components/Graph/userHelped'
import BalanceChart from '@/components/Graph/balance'
import Overview from '@/components/Graph/overview'
import ManagePlugins from '@/components/Graph/managePlugins'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { RootState } from '@/store/rootState'

import { useDispatch, useSelector } from 'react-redux'
import { setPaymasterAddress } from '@/store/reducers/paymasterSlice'

export default function Dashboard() {
  const router = useRouter()
  const [addr, setAddr] = useState('')
  const customVariables = useSelector((state: RootState) => state.paymaster)
  const dispatch = useDispatch()

  const [signer, setSigner] = useState(null)

  return (
    <>
      {customVariables.paymasterAddress && (
        <Box height="100%" width={'100%'} display={'flex'} justifyContent={'center'}>
          <Box
            position="relative"
            width={'80%'}
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="14"
            borderRadius={'2xl'}
            bg={useColorModeValue('white', 'blackAlpha.600')}
            boxShadow="lg"
            margin={10}>
            <Overview />
            <ManagePlugins />
            <UserHelped />
            <BalanceChart />
          </Box>
        </Box>
      )}
      {!customVariables.paymasterAddress && (
        <Box height="100%" width={'100%'} display={'flex'} justifyContent={'center'}>
          <Box
            position="relative"
            width={'80%'}
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="14"
            borderRadius={'2xl'}
            bg={useColorModeValue('white', 'blackAlpha.600')}
            boxShadow="lg"
            margin={10}>
            <Heading>Please input your paymaster address</Heading>
            <Input placeholder="Paymaster address" onChange={(e) => setAddr(e.target.value)} />
            <Button onClick={(e) => dispatch(setPaymasterAddress(addr))}>Confirm</Button>
          </Box>
        </Box>
      )}
    </>
  )
}
