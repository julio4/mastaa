import { Card, useColorModeValue } from '@chakra-ui/react'
import styles from '@/styles/components/card.module.css'
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react'
import { Color } from '@/types/theme'

interface CustomCardProps {
  title: string
  summary: string
  lightModeImage: string | StaticImageData
  blackModeImage: string | StaticImageData
  onClick: () => any
}

const ImageCard = (props: CustomCardProps) => {
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    setShowCard(true)
  }, [])

  return (
    <Card
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      cursor={'pointer'}
      boxShadow={'3px 7px 10px rgba(0, 0, 0, 0.2)'}
      borderRadius={'2xl'}
      transition={'transform 0.2s ease-in-out'}
      border={'1px solid black'}
      _hover={{ transform: 'scale(1.05)' }}
      minWidth={'20vw'}
      maxH={'20vw'}
      maxW={'20vh'}
      backgroundColor={Color.LightGray}
      overflow={'hidden'}
      onClick={() => props.onClick()}
      animation={showCard ? `${styles.growRotate} 0.5s linear` : ''}>
      <Image
        src={useColorModeValue(props.lightModeImage, props.blackModeImage)}
        alt="Placeholder image"
        // layout="fill"
        // objectFit="cover"
      />
    </Card>
  )
}

export default ImageCard
