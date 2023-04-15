import { Box, Card, CardHeader, Heading, CardBody, Text, useColorModeValue } from '@chakra-ui/react'
import styles from '@/styles/components/customCard.module.css'
import Image, { StaticImageData } from 'next/image'

interface CustomCardProps {
  title: string
  summary: string
  lightModeImage: string | StaticImageData
  blackModeImage: string | StaticImageData
  onClick: () => any
}

const ImageCard = (props: CustomCardProps) => {
  return (
    <Card
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      cursor={'pointer'}
      boxShadow={'0px 20px 10px rgba(0, 0, 0, 0.3)'}
      borderRadius={'2xl'}
      transition={'transform 0.2s ease-in-out'}
      border={'1px solid black'}
      _hover={{ transform: 'translateY(-10px);' }}
      minWidth={'20vw'}
      maxH={'20vw'}
      maxW={'20vh'}
      backgroundColor={'#EDF2F7'}
      overflow={'hidden'}
      onClick={() => props.onClick()}>
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
