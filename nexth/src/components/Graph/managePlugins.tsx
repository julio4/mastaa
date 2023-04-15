import { Button, useColorMode, useColorModeValue, Box, Heading, Switch, Input, Text } from '@chakra-ui/react'
import ImageCard from '@/components/imageCard'

import { FaEthereum } from 'react-icons/fa'
import worldcoin from '@public/worldcoin.svg'
import sismo from '@public/sismo.jpg'
import gitcoin from '@public/gitcoin.svg'

import { useRouter } from 'next/router'
import { RootState } from '@/store/rootState'

import { useDispatch, useSelector } from 'react-redux'
import { setInspectable } from '@/store/reducers/paymasterSlice'

export default function Overview() {
  let immutabilityChecked = true
  let inspectableChecked = true
  const setImmutabilityChecked = (event) => {
    immutabilityChecked = event.target.checked
  }
  const setInspectableChecked = (event) => {
    inspectableChecked = event.target.checked
  }

  function selectionImage() {
    let sybilResistanceChosen = SecurityChosen.chosen
    if (sybilResistanceChosen == 'worldcoin') {
      return worldcoin
    } else if (sybilResistanceChosen == 'sismo') {
      return sismo
    }
    else if (sybilResistanceChosen == 'gitcoin') {
      return gitcoin
    }
  }
  const SecurityChosen = useSelector((state: RootState) => state.sybil)
  const customizationChosen = useSelector((state: RootState) => state.paymaster)


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
          <Heading as="h2" size="md" mb={4} color={useColorModeValue('gray.700', 'gray.100')}>
            Verification System
          </Heading>
          <Box display={'flex'} flexDirection={'row'} color={useColorModeValue('gray.700', 'gray.100')} mt={'5%'}>
            <ImageCard title={'Worldcoin'} lightModeImage={selectionImage()} blackModeImage={selectionImage()} summary={'Logo of the Resistant Team'} onClick={() => {}} />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" color={useColorModeValue('gray.700', 'gray.100')}>
            Sponsored Tx number
          </Heading>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent={'center'} mt={3}>
            <Input placeholder={'Tx amount'} mt={1} />
            <Text mt={2}>Or</Text>
            <Button colorScheme="red" mt={2} onClick={() => {}} borderRadius={'xl'} width={'100%'}>
              Reset history
            </Button>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" color={useColorModeValue('gray.700', 'gray.100')}>
            Analytics
          </Heading>
          <Box display="flex" flexDirection="column" alignItems="center" mt={'30%'}>
            <Switch size={'lg'} colorScheme="red" onChange={setImmutabilityChecked} isChecked={customizationChosen.immutability} />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" color={useColorModeValue('gray.700', 'gray.100')}>
            Inspectable
          </Heading>
          <Box display="flex" flexDirection="column" alignItems="center" mt={'30%'}>
            <Switch size={'lg'} colorScheme="red" onChange={setInspectableChecked} isChecked={customizationChosen.inspectable} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
