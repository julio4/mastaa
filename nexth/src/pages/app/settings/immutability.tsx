import { use, useState, useRef } from 'react'
import { useRouter } from 'next/router'

import { Box, useColorModeValue, Heading, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Switch, Text } from '@chakra-ui/react'

import { ChevronLeftIcon, AddIcon, MinusIcon, ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'

import styles from '@/styles/start/index.module.css'
import Layout from '@/components/Layout/layout_light'

const Start = () => {
  const router = useRouter()
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
      <Box height="100%" width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box
          position="relative"
          width={'80vw'}
          display="flex"
          alignItems="center"
          padding="10"
          pt={20}
          borderRadius={'2xl'}
          bg={useColorModeValue('white', 'blackAlpha.600')}
          boxShadow="lg"
          margin={10}
          height={'80%'}>
          <ArrowLeftIcon color="pink" boxSize={7} onClick={() => setSliderValue(sliderValue + 1)} _hover={{ cursor: 'pointer' }} />
          <Box
            position="relative"
            width={'100%'}
            display="flex"
            flexDirection={'column'}
            alignItems="center"
            padding="10"
            bg={useColorModeValue('white', 'blackAlpha.600')}
            margin={10}
            height={'80%'}>
            <Heading as="h1" size="2xl" fontWeight="bold" color={useColorModeValue('black', 'white')} textAlign="center" mb={'5%'} mt={'-5%'}>
              Customize your paymaster
            </Heading>
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
              <Text fontSize="35px" fontWeight="bold" color={useColorModeValue('black', 'white')} mr={5}>
                Sponsor
              </Text>
              <input
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
                  width: '60px',
                  background: 'transparent',
                }}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              <Text fontSize="35px" fontWeight="bold" color={useColorModeValue('black', 'white')} ml={5}>
                Tx per user
              </Text>
            </Box>
          </Box>
          <ArrowRightIcon color="pink" boxSize={7} onClick={() => setSliderValue(sliderValue + 1)} _hover={{ cursor: 'pointer' }} />
        </Box>
      </Box>
    </Layout>
  )
}

export default Start
