import { configureStore } from '@reduxjs/toolkit'
import homeReducer from 'page/home/store/homeSlice'
import loginSlice from 'page/login/store/loginSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    user: loginSlice,
  },
})