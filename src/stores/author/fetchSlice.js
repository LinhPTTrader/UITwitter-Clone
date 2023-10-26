import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isFetchNewFeed: true
}


const fetchSlice = createSlice({
    name: 'fetchData',
    initialState,
    reducers: {
        fetchNewFeed: (state) => {
            state.isFetchNewFeed = !(state.isFetchNewFeed)
        }
    }
})

export const { fetchNewFeed } = fetchSlice.actions

export default fetchSlice.reducer