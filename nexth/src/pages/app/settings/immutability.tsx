import { Switch } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setImmutability } from '@/store/reducers/paymasterSlice'
import SettingsWrapper from './wrapper'
import { useState } from 'react'

const Immutability = () => {
  const router = useRouter()
  const [immutabilitySwitch, setImmutabilitySwitch] = useState(false)
  const dispatch = useDispatch()

  const setImmutabilityChecked = (event) => {
    setImmutabilitySwitch(event.target.checked)
  }

  const moveToNextPage = () => {
    dispatch(setImmutability(immutabilitySwitch))
    router.push('/app/settings/inspectable')
  }

  return (
    <SettingsWrapper title="Immutability" moveToPreviousPage={() => router.push('/app/settings')} moveToNextPage={moveToNextPage}>
      <Switch marginTop={'8vh'} size={'lg'} colorScheme="pink" onChange={setImmutabilityChecked} />
    </SettingsWrapper>
  )
}

export default Immutability
