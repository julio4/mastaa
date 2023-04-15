import { useRouter } from 'next/router'
import ContractAddress from '../start/contractAddress'
import { setOwnerAddress } from '@/store/reducers/paymasterSlice'
import { useDispatch } from 'react-redux'
import { ChangeEvent, useState } from 'react'
import SettingsWrapper from './wrapper'

const OwnerAddress = () => {
  const router = useRouter()
  const [ownerAddressInput, setOwnerAddressInput] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOwnerAddressInput(event.target.value)
  }

  const moveToNextPage = () => {
    dispatch(setOwnerAddress(ownerAddressInput))
    router.push('/app/settings/ownerAddress')
  }
  return (
    <SettingsWrapper title="Owner Address" moveToPreviousPage={() => router.push('/app/settings/inspectable')} moveToNextPage={moveToNextPage}>
      <ContractAddress onChange={handleInputChange} />
    </SettingsWrapper>
  )
}

export default OwnerAddress
