import { AtSignIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

interface ContractAddressProps {
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const ContractAddress = (props: ContractAddressProps) => {
  return (
    <InputGroup maxWidth="40vw">
      <InputLeftAddon borderRadius={'2xl'}> {<AtSignIcon />} </InputLeftAddon>
      <Input placeholder={props.placeholder} borderRadius={'2xl'} onChange={props.onChange} />
    </InputGroup>
  )
}

export default ContractAddress
