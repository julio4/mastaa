import { useRouter } from 'next/router'
import ContractAddress from '../start/contractAddress'
import { setOwnerAddress } from '@/store/reducers/paymasterSlice'
import { useDispatch } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'
import SettingsWrapper from './wrapper'
import { Box } from '@chakra-ui/react'
import { setStep } from '@/store/reducers/stepSlice'
import { Step } from '@/types/enums'
import { useToast } from '@chakra-ui/react'

const OwnerAddress = () => {
  const router = useRouter()
  const [ownerAddressInput, setOwnerAddressInput] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOwnerAddressInput(event.target.value)
  }

  const toast = useToast()

  const moveToNextPage = () => {
    const addressRegexp = /^0x[a-fA-F0-9]{40}$/
    if (ownerAddressInput.match(addressRegexp)) {
      dispatch(setOwnerAddress(ownerAddressInput))
      router.push('/deploy')
    } else {
      toast({
        title: 'Wrong address format',
        description: "Address must start by '0x', contain 40 characters (case-insensitive letters and numbers)",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    dispatch(setStep(Step.Step6))
  }, [])

  return (
    <SettingsWrapper
      title="Owner Address"
      explanation="Enter the owner address"
      moveToPreviousPage={() => router.push('/app/settings/inspectable')}
      moveToNextPage={moveToNextPage}>
      <Box marginTop={'5vh'}>
        <ContractAddress placeholder="Owner address" onChange={handleInputChange} />
      </Box>
    </SettingsWrapper>
  )
}

export default OwnerAddress
