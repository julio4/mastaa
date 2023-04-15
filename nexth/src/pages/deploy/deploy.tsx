import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import contractArtifact from '../../../constants/abi/MastaaDiamond.json'
import contractsBinaries from '../../../constants/contractsBinaries.json'
import { Button, Box, useColorModeValue, Heading, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/rootState'
import { setStep } from '@/store/reducers/stepSlice'
import { Step } from '@/types/enums'
import { WarningIcon, CheckCircleIcon, StarIcon } from '@chakra-ui/icons'

import { Divider } from '@chakra-ui/react'

export default function DeployCard() {
  const customVariables = useSelector((state: RootState) => state.paymaster)
  const contractByteCode = contractsBinaries.MastaaDiamond

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
      const arg1 = [
        ['0xe185eb297f436084b21670e1fe477fccf0a5c021', 0, ['0x1f931c1c']],
        ['0x635D2c973a812D1753a647D85785E0fDcfCBB4d4', 0, ['0x52ef6b2c', '0xcdffacc6', '0x7a0ed627', '0xadfca15e', '0x01ffc9a7']],
        ['0x310BAaBc806a4044978e06Bb0cf0CF4f0C72a54c', 0, ['0x8da5cb5b', '0xf2fde38b']],
        [
          '0xb54Ef1a543429332618E42B7fB84A35CBe984Ba7',
          0,
          [
            '0x796d4371',
            '0xb0d691fe',
            '0xc399ec88',
            '0x0396cb60',
            '0xd0e30db0',
            '0xa9a23409',
            '0xbb9fe6bf',
            '0xf465c77e',
            '0xc23a5cea',
            '0x205c2878',
          ],
        ],
      ]
      const arg2 = [customVariables.ownerAddress]
      const contract = await factory.deploy(arg1, arg2)
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
          <Heading size="md" padding={10} ml={4}>
            OwnerAddress: {customVariables.ownerAddress}
          </Heading>
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
      <Button onClick={() => console.log('customVariables', customVariables)}>Log</Button>
    </Box>
  )
}
