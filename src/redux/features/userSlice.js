import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
})

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = 'loading'
    },
    [getUsers.fulfilled]: (state, {payload}) => {
      state.users = payload
      state.status = 'success'
    },
    [getUsers.rejected]:(state)=>{
      state.status = "failed"
    }
  },
})

export default userSlice.reducer
