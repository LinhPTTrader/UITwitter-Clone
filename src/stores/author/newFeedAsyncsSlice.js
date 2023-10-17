import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetNewFeed } from "../../services/user.services";


const initialState = {
    listNewFeed: [],
}

export const fetchNewFeed = createAsyncThunk(
    //action type string
    'get/fetchNewFeed',
    //callback function
    async () => {
        const result = await GetNewFeed(20, 1);
        console.log(result)
        if (result && result.data) {
            return result.data
        }
        return []
    }
)

const newFeedAsyncSlice = createSlice({
    name: 'authSync',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewFeed.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNewFeed.fulfilled, (state, action) => {
                state.loading = true;
                state.listNewFeed = action.payload;
            })
            .addCase(fetchNewFeed.rejected, (state) => {
                state.loading = false;
            })
    },
})
export default newFeedAsyncSlice.reducer