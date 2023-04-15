import Layout from '@/components/Layout/layout_light'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useColorModeValue, Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface SettingsWrapperProps {
  title: string
  moveToPreviousPage: () => void
  moveToNextPage: () => void
  children: ReactNode
}

const SettingsWrapper = (props: SettingsWrapperProps) => {
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
          <ArrowLeftIcon color="pink" boxSize={7} onClick={props.moveToPreviousPage} _hover={{ cursor: 'pointer' }} />
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
            <Heading as="h2" size="2xl" fontWeight="bold" color={useColorModeValue('black', 'white')} textAlign="center" mb={'5%'} mt={'-5%'}>
              {props.title}
            </Heading>
            {props.children}
          </Box>
          <ArrowRightIcon color="pink" boxSize={7} onClick={props.moveToNextPage} _hover={{ cursor: 'pointer' }} />
        </Box>
      </Box>
    </Layout>
  )
}

export default SettingsWrapper
