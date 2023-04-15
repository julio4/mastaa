import React, { useState } from 'react'
import { ethers } from 'ethers'
import contractArtifact from '../../../constants/abi/MastaaDiamond.json'
import contractsBinaries from '../../../constants/contractsBinaries.json'
import { Button, Box, useColorModeValue, Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/rootState'

export default function DeployCard() {
  const customVariables = useSelector((state: RootState) => state.paymaster)
  const contractByteCode = contractsBinaries.MastaaDiamond

  const [signer, setSigner] = useState(null)
  console.log('signer', signer)
  console.log("contract's bytecode", contractByteCode)
  console.log('contractArtifact', contractArtifact)
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
      console.log('factory is: ', factory)
      const contract = await factory.deploy(arg1, arg2)
      console.log(`Contract deployed at address: ${contract.address}`)
    }
  }

  return (
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
        <Heading>Recap</Heading>
        <Box>
          <Heading size="md">Immutability: {customVariables.immutability}</Heading>
          <Heading size="md">Inspectable: {customVariables.inspectable}</Heading>
          <Heading size="md">OwnerAddress: {customVariables.ownerAddress}</Heading>
          <Heading size="md">Tx per user: {customVariables.txPerUser}</Heading>
        </Box>
        <Button onClick={() => console.log('customVariables', customVariables.immutability)}
        ></Button>

        {!signer && <Button onClick={connectMetamask}>Connect MetaMask</Button>}
        {signer && <Button onClick={deployContract}>Deploy Contract</Button>}
      </Box>
    </Box>
  )
}
