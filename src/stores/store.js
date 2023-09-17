import { configureStore } from '@reduxjs/toolkit'
import authAsyncReducer from './author/userAsyncSlice';


export const store = configureStore({
    reducer: {
        asyncAuth: authAsyncReducer,
    }
})