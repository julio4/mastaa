import { createSlice } from '@reduxjs/toolkit'

const stepSlice = createSlice({
  name: 'step',
  initialState: {
    value: 0,
  },
  reducers: {
    setStep: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setStep } = stepSlice.actions

export default stepSlice
