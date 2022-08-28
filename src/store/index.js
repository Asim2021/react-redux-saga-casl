import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../redux/features/couterSlice"
import userSlice from '../redux/features/userSlice'


const store = configureStore({
  reducer: { 
    counter:counterReducer , 
    users:userSlice},
})

export default store