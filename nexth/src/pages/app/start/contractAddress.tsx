import { AtSignIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'

const ContractAddress = () => {
  return (
    <InputGroup maxWidth="40vw">
      <InputLeftAddon borderRadius={'2xl'}> {<AtSignIcon />} </InputLeftAddon>
      <Input placeholder="Contract address" borderRadius={'2xl'} />
    </InputGroup>
  )
}

export default ContractAddress
