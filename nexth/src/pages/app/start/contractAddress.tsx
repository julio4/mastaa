import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'

const ContractAddress = () => {
  return (
    <InputGroup maxWidth="40vw">
      <InputLeftAddon> 0x </InputLeftAddon>
      <Input placeholder="Contract address" />
    </InputGroup>
  )
}

export default ContractAddress
