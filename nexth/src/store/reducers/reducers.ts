import { combineReducers } from 'redux'
import stepSlice from './stepSlice'
import paymasterSlice from './paymasterSlice'

// const rootReducer = {
//   counter: counterSlice.reducer,
// }

const rootReducer = combineReducers({
  step: stepSlice.reducer,
  paymaster: paymasterSlice.reducer,
})

export default rootReducer
