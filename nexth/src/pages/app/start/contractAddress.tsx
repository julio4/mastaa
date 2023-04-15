import { AtSignIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftAddon, useColorModeValue } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

interface ContractAddressProps {
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const ContractAddress = (props: ContractAddressProps) => {
  return (
    <InputGroup borderRadius={'2xl'} mb={'10%'}  padding={10}>
      <InputLeftAddon borderRadius={'2xl'} backgroundColor={useColorModeValue("orange.200", "red.900")}> {<AtSignIcon />} </InputLeftAddon>
      <Input placeholder={props.placeholder} borderRadius={'2xl'} onChange={props.onChange} backgroundColor={useColorModeValue("orange.100", "red.800")}  boxShadow="lg"  _placeholder={{ color: useColorModeValue("gray.500", "gray.200") }} />
    </InputGroup>
  )
}

export default ContractAddress
