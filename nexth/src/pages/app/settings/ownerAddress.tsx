import { useRouter } from 'next/router'
import ContractAddress from '../start/contractAddress'
import { setOwnerAddress } from '@/store/reducers/paymasterSlice'
import { useDispatch } from 'react-redux'
import { ChangeEvent, useState } from 'react'
import SettingsWrapper from './wrapper'
import { Box } from '@chakra-ui/react'

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
