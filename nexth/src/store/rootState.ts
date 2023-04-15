import { Paymaster } from './reducers/paymasterSlice'
import { Step } from './reducers/stepSlice'

export type RootState = {
  step: Step
  paymaster: Paymaster
}
