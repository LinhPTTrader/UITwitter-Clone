import { configureStore } from '@reduxjs/toolkit'
import authAsyncReducer from './author/userAsyncSlice';

import fetchReducer from './author/fetchSlice';

export const store = configureStore({
    reducer: {
        asyncAuth: authAsyncReducer,
        fetchData: fetchReducer
    }
})