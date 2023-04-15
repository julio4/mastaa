import { combineReducers } from 'redux'
import stepSlice from './stepSlice'
import paymasterSlice from './paymasterSlice'
import sybilSlice from './sybilSlice'

// const rootReducer = {
//   counter: counterSlice.reducer,
// }

const rootReducer = combineReducers({
  step: stepSlice.reducer,
  paymaster: paymasterSlice.reducer,
  sybil: sybilSlice.reducer,
})

export default rootReducer
