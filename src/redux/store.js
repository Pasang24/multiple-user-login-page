import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slice/UserSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
})