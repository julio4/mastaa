import Layout from '@/components/Layout/layout'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useColorModeValue, Box, Heading, Text, Card, CardBody } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface SettingsWrapperProps {
  title: string
  explanation: string
  moveToPreviousPage: () => void
  moveToNextPage: () => void
  children: ReactNode
}

const SettingsWrapper = (props: SettingsWrapperProps) => {
  return (
    <Layout>
      <Card
        width={'80vw'}
        margin={'70px'}
        boxShadow={'3px 7px 10px rgba(0, 0, 0, 0.3)'}
        borderRadius={'2xl'}
        backgroundColor={'white'}
        display={'flex'}
        alignItems={'center'}
        position={'relative'}>
        <Heading as="h2" size="2xl" marginTop={'14vh'} fontWeight="bold" color={useColorModeValue('black', 'white')} textAlign="center">
          {props.title}
        </Heading>
        <Box>
          <ArrowLeftIcon
            color="pink"
            boxSize={7}
            position={'absolute'}
            left={'6vw'}
            top="50%"
            onClick={props.moveToPreviousPage}
            _hover={{ cursor: 'pointer' }}
          />
          <CardBody width={'100%'} paddingX={'10vw'} margin={'auto'} textAlign={'center'}>
            <Text width={'100%'}>{props.explanation}</Text>
            {props.children}
          </CardBody>
          <ArrowRightIcon
            color="pink"
            boxSize={7}
            position={'absolute'}
            right={'6vw'}
            top="50%"
            onClick={props.moveToNextPage}
            _hover={{ cursor: 'pointer' }}
          />
        </Box>
      </Card>
    </Layout>
  )
}

export default SettingsWrapper
