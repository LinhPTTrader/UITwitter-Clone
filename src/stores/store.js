import { configureStore } from '@reduxjs/toolkit'
import authAsyncReducer from './author/userAsyncSlice';
import newFeedAsyncReducer from './author/newFeedAsyncsSlice';

export const store = configureStore({
    reducer: {
        asyncAuth: authAsyncReducer,
        newFeed: newFeedAsyncReducer
    }
})