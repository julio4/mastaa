import { useRouter } from 'next/router'
import ContractAddress from '../start/contractAddress'
import { setOwnerAddress } from '@/store/reducers/paymasterSlice'
import { useDispatch } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'
import SettingsWrapper from './wrapper'
import { Box } from '@chakra-ui/react'
import { setStep } from '@/store/reducers/stepSlice'
import { Step } from '@/types/enums'

const OwnerAddress = () => {
  const router = useRouter()
  const [ownerAddressInput, setOwnerAddressInput] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOwnerAddressInput(event.target.value)
  }

  const moveToNextPage = () => {
    dispatch(setOwnerAddress(ownerAddressInput))
    router.push('/deploy')
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
