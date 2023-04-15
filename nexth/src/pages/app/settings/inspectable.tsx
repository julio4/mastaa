import { Box, FormLabel, Switch } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setInspectable } from '@/store/reducers/paymasterSlice'
import SettingsWrapper from './wrapper'
import { useEffect, useState } from 'react'
import { Highlight } from '@chakra-ui/react'
import { setStep } from '@/store/reducers/stepSlice'
import { Step } from '@/types/enums'

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

  useEffect(() => {
    dispatch(setStep(Step.Step5))
  }, [])

  return (
    <SettingsWrapper
      title="Inspectable"
      explanation="Enabling this option will allow everyone to see which plugins are enabled on the contract"
      moveToPreviousPage={() => router.push('/app/settings/immutability')}
      moveToNextPage={moveToNextPage}>
      <Box display={'flex'} marginTop={'4vh'} alignItems={'center'} justifyContent={'center'}>
        <FormLabel>
          <Highlight query="Click to make it Inspectable :" styles={{ px: '2', py: '2', bg: 'orange.100', borderRadius: 5, fontSize: 'xl' }}>
            Click to make it Inspectable :
          </Highlight>
        </FormLabel>
        <Switch bottom={0.5} size={'lg'} colorScheme="pink" onChange={setInspectableChecked} />
      </Box>
    </SettingsWrapper>
  )
}

export default Inspectable
