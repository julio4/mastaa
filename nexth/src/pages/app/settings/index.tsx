import { useState, useRef } from 'react'
import { useRouter } from 'next/router'

import { Box, useColorModeValue, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from '@chakra-ui/react'

import { AddIcon, MinusIcon } from '@chakra-ui/icons'

import { useDispatch } from 'react-redux'
import { setTxPerUser } from '@/store/reducers/paymasterSlice'
import SettingsWrapper from './wrapper'

const TransactionsPerUser = () => {
  const router = useRouter()
  const [sliderValue, setSliderValue] = useState(30)
  const inputRef = useRef(null)

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
  }

  const handleInputChange = (event) => {
    const value = event.target.value
    setSliderValue(value)
  }

  const handleInputBlur = () => {
    if (inputRef.current) {
      const value = parseInt(inputRef.current.value)
      if (!isNaN(value)) {
        setSliderValue(value)
      }
    }
  }

  const dispatch = useDispatch()
  const moveToNextPage = () => {
    dispatch(setTxPerUser(sliderValue))
    router.push('/app/settings/immutability')
  }

  return (
    <SettingsWrapper
      title="Customize your paymaster"
      explanation="Choose the number of transactions you want to sponsor"
      moveToPreviousPage={() => router.push('/app/sybil-protection')}
      moveToNextPage={moveToNextPage}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100%'} height={'10%'} marginTop={10}>
        <Box mx={6}>
          <MinusIcon color="pink" boxSize={7} onClick={() => setSliderValue(sliderValue - 1)} _hover={{ cursor: 'pointer' }} />
        </Box>
        <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30} value={sliderValue} width={'50%'} onChange={handleSliderChange}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Box mx={6}>
          <AddIcon color="pink" boxSize={7} onClick={() => setSliderValue(sliderValue + 1)} _hover={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100%'} height={'10%'} marginTop={10}>
        <Text fontSize="35px" fontWeight="bold" color={useColorModeValue('black', 'white')} mr={2}>
          Sponsor
        </Text>
        <input
          disabled
          ref={inputRef}
          type="number"
          min="0"
          step="1"
          value={sliderValue}
          style={{
            color: 'pink',
            border: 'none',
            fontSize: '50px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '82px',
            background: 'transparent',
          }}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <Text fontSize="35px" fontWeight="bold" color={useColorModeValue('black', 'white')} ml={2}>
          Tx per user
        </Text>
      </Box>
    </SettingsWrapper>
  )
}

export default TransactionsPerUser
