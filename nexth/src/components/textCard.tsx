import { Card, CardHeader, Heading, CardBody, Text } from '@chakra-ui/react'
import styles from '@/styles/components/card.module.css'
import { useState, useEffect } from 'react'
import { Color } from '@/types/theme'

interface TextCardProps {
  title: string
  summary: string
  onClick: () => any
  disabled: boolean
}

const TextCard = (props: TextCardProps) => {
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    setShowCard(true)
  }, [])

  return (
    <Card
      minWidth={'20vw'}
      cursor={!props.disabled ? 'pointer' : ''}
      borderRadius={'2xl'}
      boxShadow={'3px 7px 10px rgba(0, 0, 0, 0.2)'}
      transition={'transform 0.2s ease-in-out'}
      _hover={!props.disabled ? { transform: 'scale(1.1)', backgroundColor: Color.DarkerGray } : {}}
      onClick={() => props.onClick()}
      style={props.disabled ? { backgroundColor: 'lightgray', position: 'relative' } : {}}
      animation={showCard ? `${styles.growRotate} 0.5s linear` : ''}
      backgroundColor={Color.LightGray}>
      <CardHeader opacity={props.disabled ? 0.6 : 1}>
        <Heading size="md"> {props.title} </Heading>
      </CardHeader>
      <CardBody>
        {props.disabled && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '2xl',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: 'rotate(-30deg)',
              zIndex: 1,
            }}>
            <Text fontSize="2xl" fontWeight="extrabold" color="white">
              COMING SOON
            </Text>
          </div>
        )}
        <Text opacity={props.disabled ? 0.6 : 1}> {props.summary} </Text>
      </CardBody>
    </Card>
  )
}

export default TextCard
