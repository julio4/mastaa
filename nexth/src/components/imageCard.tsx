import { Card, useColorModeValue, Text } from '@chakra-ui/react'
import styles from '@/styles/components/card.module.css'
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react'
import { Color } from '@/types/theme'
import { useRouter } from 'next/router'
import { setChosen } from '@/store/reducers/sybilSlice'
import { useDispatch } from 'react-redux'

interface CustomCardProps {
  lightModeImage: string | StaticImageData
  blackModeImage: string | StaticImageData
  disabled: boolean
  sybilOption: 'worldcoin' | 'sismo' | 'gitcoin'
}

const ImageCard = (props: CustomCardProps) => {
  const [showCard, setShowCard] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    setShowCard(true)
  }, [])

  const moveToNextPage = () => {
    if (!props.disabled) {
      dispatch(setChosen(props.sybilOption))
      router.push('/app/settings')
    }
  }

  return (
    <Card
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      boxShadow={'3px 7px 10px rgba(0, 0, 0, 0.2)'}
      borderRadius={'2xl'}
      transition={'transform 0.2s ease-in-out'}
      cursor={!props.disabled ? 'pointer' : ''}
      _hover={!props.disabled ? { transform: 'scale(1.1)', backgroundColor: Color.LightGray } : {}}
      minWidth={'20vw'}
      maxH={'20vw'}
      maxW={'20vh'}
      backgroundColor={Color.LightGray}
      overflow={'hidden'}
      onClick={moveToNextPage}
      position={'relative'}
      animation={showCard ? `${styles.growRotate} 0.5s linear` : ''}>
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
          <Text fontSize="3xl" fontWeight="extrabold" color="black" zIndex={2}>
            COMING SOON
          </Text>
        </div>
      )}
      <div style={{ opacity: props.disabled ? 0.3 : 1 }}>
        <Image
          src={useColorModeValue(props.lightModeImage, props.blackModeImage)}
          alt="Placeholder image"

          // layout="fill"
          // objectFit="cover"
        />
      </div>
    </Card>
  )
}

export default ImageCard
