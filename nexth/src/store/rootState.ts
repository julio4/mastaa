import { Paymaster } from './reducers/paymasterSlice'
import { Step } from './reducers/stepSlice'
import { Sybil } from './reducers/sybilSlice'

export type RootState = {
  step: Step
  paymaster: Paymaster
  sybil: Sybil
}
