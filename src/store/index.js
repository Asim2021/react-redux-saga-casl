import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../redux/features/couterSlice"


const store = configureStore({
  reducer: counterReducer,
})

export default store