import { createSlice } from '@reduxjs/toolkit'

const paymasterSlice = createSlice({
  name: 'paymaster',
  initialState: {
    paymasterAddress: '',
    txPerUser: 0,
    immutability: false,
    inspectable: false,
    ownerAddress: '',
  },
  reducers: {
    setTxPerUser: (state, action) => {
      state.txPerUser = action.payload
    },
    setImmutability: (state, action) => {
      state.immutability = action.payload
    },
    setInspectable: (state, action) => {
      state.inspectable = action.payload
    },
    setOwnerAddress: (state, action) => {
      state.ownerAddress = action.payload
    },
    setPaymasterAddress: (state, action) => {
      state.paymasterAddress = action.payload
    },
  },
})

export const { setTxPerUser, setImmutability, setInspectable, setOwnerAddress, setPaymasterAddress } = paymasterSlice.actions

export default paymasterSlice

export type Paymaster = {
  txPerUser: 0
  immutability: false
  inspectable: false
  ownerAddress: ''
  paymasterAddress: ''
}
