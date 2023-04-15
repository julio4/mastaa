import { Switch } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setInspectable } from '@/store/reducers/paymasterSlice'
import SettingsWrapper from './wrapper'
import { useState } from 'react'

const Inspectable = () => {
  const router = useRouter()
  const [inspectableSwitch, setInspectableSwitch] = useState(false)
  const dispatch = useDispatch()

  const setInspectableChecked = (event) => {
    setInspectableSwitch(event.target.checked)
  }

  const moveToNextPage = () => {
    dispatch(setInspectable(inspectableSwitch))
    router.push('/app/settings/ownerAddress')
  }

  return (
    <SettingsWrapper title="Inspectable" moveToPreviousPage={() => router.push('/app/settings/immutability')} moveToNextPage={moveToNextPage}>
      <Switch marginTop={'8vh'} size={'lg'} colorScheme="pink" onChange={setInspectableChecked} />
    </SettingsWrapper>
  )
}

export default Inspectable
