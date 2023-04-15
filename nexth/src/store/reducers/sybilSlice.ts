import { createSlice } from '@reduxjs/toolkit'

const sybilSlice = createSlice({
  name: 'sybil',
  initialState: {
    chosen: '',
  },
  reducers: {
    setChosen: (state, action) => {
      state.chosen = action.payload
    },
  },
})

export const { setChosen } = sybilSlice.actions

export default sybilSlice

export type Sybil = {
  chosen: 'worldcoin' | 'sismo' | 'gitcoin'
}
