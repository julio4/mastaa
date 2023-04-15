import { Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react'

interface TextCardProps {
  title: string
  summary: string
  onClick: () => any
}

const TextCard = (props: TextCardProps) => {
  return (
    <Card
      minWidth={'20vw'}
      cursor={'pointer'}
      border={'1px solid black'}
      borderRadius={'2xl'}
      boxShadow={'0px 20px 10px rgba(0, 0, 0, 0.3)'}
      transition={'transform 0.2s ease-in-out'}
      _hover={{ transform: 'translateY(-10px)', backgroundColor: '#EDF2F7' }}
      onClick={() => props.onClick()}>
      <CardHeader>
        <Heading size="md"> {props.title} </Heading>
      </CardHeader>
      <CardBody>
        <Text> {props.summary} </Text>
      </CardBody>
    </Card>
  )
}

export default TextCard
