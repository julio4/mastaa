import { FormLabel, Highlight, Switch } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setImmutability } from '@/store/reducers/paymasterSlice'
import SettingsWrapper from './wrapper'
import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { setStep } from '@/store/reducers/stepSlice'
import { Step } from '@/types/enums'

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

  useEffect(() => {
    dispatch(setStep(Step.Step4))
  }, [])

  return (
    <SettingsWrapper
      title="Modularity"
      explanation="Make the contract modular "
      moveToPreviousPage={() => router.push('/app/settings')}
      moveToNextPage={moveToNextPage}>
      <Box display={'flex'} marginTop={'4vh'} alignItems={'center'} justifyContent={'center'}>
        <FormLabel>
          <Highlight query="Click to make it Immutable :" styles={{ px: '2', py: '2', bg: 'orange.100', borderRadius: 5 }}>
            Click to make it Modular :
          </Highlight>
        </FormLabel>
        <Switch bottom={0.5} size={'lg'} colorScheme="pink" onChange={setImmutabilityChecked} />
      </Box>
    </SettingsWrapper>
  )
}

export default Immutability
