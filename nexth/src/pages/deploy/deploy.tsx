import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import contractArtifact from '../../../constants/abi/MastaaDiamond.json'
import contractsBinaries from '../../../constants/contractsBinaries.json'
import { Facet } from '../../../constants/Facet.js'
import { Button, Box, useColorModeValue, Heading, Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/rootState'
import { setStep } from '@/store/reducers/stepSlice'
import { Step } from '@/types/enums'
import { WarningIcon, CheckCircleIcon, StarIcon } from '@chakra-ui/icons'

import { Divider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { setPaymasterAddress } from '@/store/reducers/paymasterSlice'

export default function DeployCard() {
  const customVariables = useSelector((state: RootState) => state.paymaster)
  const contractByteCode = contractsBinaries.MastaaDiamond
  const router = useRouter()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setStep(Step.Step7))
  }, [])

  const [signer, setSigner] = useState(null)
  const factory = signer ? new ethers.ContractFactory(contractArtifact.abi, contractByteCode, signer) : null

  async function connectMetamask() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
      setSigner(provider.getSigner())
    } else {
      alert('Please install MetaMask to use this feature')
    }
  }

  async function deployContract() {
    if (factory) {
      let arg1: any = []
      if (customVariables.immutability) {
        arg1.push(Facet.Modularity)
      }
      if (customVariables.inspectable) {
        arg1.push(Facet.Inspectable)
      }
      arg1.push(Facet.Ownership)
      arg1.push(Facet.openBarP)

      const arg2 = [customVariables.ownerAddress, '0x556D138c2B9442beb6723Ca63AE0e71457942B6F', customVariables.txPerUser]
      const contract = await factory.deploy(arg1, arg2)
      dispatch(setPaymasterAddress(contract.address))
      router.push("/app/dashboard")

    }
  }
  return (
    <Box height="100%" width={'80vw'} display={'flex'} justifyContent={'center'}>
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
        <Heading>Recap</Heading>
        <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent={'space-between'} width={'100%'}>
          {customVariables.immutability ? (
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Heading size="md" padding={10} ml={4} pt={14}>
                Modularity:
              </Heading>
              <CheckCircleIcon color="green.500" />
              <Text>Your contract is mutable, you can add, remove and manage plugins!</Text>
            </Box>
          ) : (
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Heading size="md" padding={10} ml={4}>
                Modularity:
              </Heading>
              <CheckCircleIcon color="green.500" boxSize={6} />
              <Text ml={2} fontSize={'md'} fontStyle={'semibold'}>
                {' '}
                You contract is immutable, it is safer!
              </Text>
            </Box>
          )}
          <Divider orientation="horizontal" />
          {customVariables.inspectable ? (
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Heading size="md" padding={10} ml={4}>
                Inspectable:
              </Heading>
              <CheckCircleIcon color="green.500" />
              <Text ml={2}>You will be able to see paymaster's plugin</Text>
            </Box>
          ) : (
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Heading size="md" padding={10} ml={4}>
                Inspectable
              </Heading>
              <WarningIcon color="red.500" boxSize={6} />
              <Text ml={2} fontSize={'md'} fontStyle={'semibold'}>
                {' '}
                It won't be possible to see paymaster's plugin
              </Text>
            </Box>
          )}

          <Divider orientation="horizontal" />
          <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <Heading size="md" padding={10} ml={4}>
              OwnerAddress:
            </Heading>

            <Text> {customVariables.ownerAddress}</Text>
          </Box>

          <Divider orientation="horizontal" />
          <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <Heading size="md" padding={10} ml={4}>
              Tx per user:
            </Heading>
            <StarIcon color="yellow.500" boxSize={6} mb={1} />

            <Text mx={3}> Your paymaster will sponsor up to {customVariables.txPerUser} tx per user!</Text>
            <StarIcon color="yellow.500" boxSize={6} mb={1} />
          </Box>
          <Divider orientation="horizontal" />
        </Box>

        {!signer && (
          <Button
            mt={10}
            bgColor={useColorModeValue('orange.200', 'orange.500')}
            _hover={{
              bg: useColorModeValue('orange.400', 'orange.300'),
            }}
            onClick={connectMetamask}>
            Connect MetaMask
          </Button>
        )}
        {signer && (
          <Button
            mt={10}
            bgColor={useColorModeValue('orange.200', 'orange.500')}
            _hover={{
              bg: useColorModeValue('orange.400', 'orange.300'),
            }}
            onClick={deployContract}>
            Deploy Contract
          </Button>
        )}
      </Box>
    </Box>
  )
}
