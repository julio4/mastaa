import { combineReducers } from 'redux'
import stepSlice from './stepSlice'

// const rootReducer = {
//   counter: counterSlice.reducer,
// }

const rootReducer = combineReducers({
  step: stepSlice.reducer,
})

export default rootReducer
