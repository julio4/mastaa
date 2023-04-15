import { use, useState, useRef } from 'react'

import { Box, useColorModeValue, Heading, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Switch, Text } from '@chakra-ui/react'

import { ChevronLeftIcon, AddIcon, MinusIcon } from '@chakra-ui/icons'

import styles from '@/styles/start/index.module.css'
import Layout from '@/components/Layout/layout_light'

const Start = () => {
  const [enableTxCustom, setEnableTxCustom] = useState(false)
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

  return (
    <Layout>
      <Box height="100%" width={'100%'} display={'flex'} justifyContent={'center'}>
        <Box
          position="relative"
          width={'80vw'}
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="10"
          borderRadius={'2xl'}
          bg={useColorModeValue('white', 'blackAlpha.600')}
          boxShadow="lg"
          margin={10}>
          <Heading as="h1" size="2xl" fontWeight="bold" color={useColorModeValue('black', 'white')} textAlign="center">
            Customize your paymaster
          </Heading>
          <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} width={'100%'} height={'10%'} marginTop={10}>
            <input
              ref={inputRef}
              type="number"
              min="0"
              step="1"
              value={sliderValue}
              style={{ color: 'pink', border: 'none', fontSize: '32px', fontWeight: 'bold', textAlign: 'center', width: '60px' }}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <Text fontSize="xl" fontWeight="bold" color={useColorModeValue('black', 'white')} ml={2} mr={"10%"}>
              Tx per user sponsored
            </Text>
            <Box mx={6}>
              <MinusIcon color="pink" boxSize={7} onClick={() => setSliderValue(sliderValue - 1)} _hover={{ cursor: 'pointer' }} />
            </Box>
            <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30} value={sliderValue} width={'30%'} onChange={handleSliderChange}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Box mx={6}>
              <AddIcon color="pink" boxSize={7} onClick={() => setSliderValue(sliderValue + 1)} _hover={{ cursor: 'pointer' }} />
            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} width={'100%'} height={'10%'} marginTop={10}>
            <Heading as="h2" fontSize={"24px"} fontWeight="bold" color={useColorModeValue('black', 'white')} mr={'10%'}>
              Immuability
            </Heading>
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} width={'100%'} height={'10%'} marginTop={10}>
            <Heading as="h2" size="xl" fontWeight="bold" color={useColorModeValue('black', 'white')} mr={'10%'}>
              Inspectable
            </Heading>
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} width={'100%'} height={'10%'} marginTop={10}>
            <Heading as="h2" size="xl" fontWeight="bold" color={useColorModeValue('black', 'white')} mr={'10%'}>
              Owner Address
            </Heading>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Start
