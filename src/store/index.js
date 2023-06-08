import { configureStore } from '@reduxjs/toolkit'
import homeReducer from 'page/home/store/homeSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
})