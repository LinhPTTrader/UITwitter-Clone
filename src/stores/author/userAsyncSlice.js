import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchAccount } from "../../services/user.services";

const initialState = {
    isAuthenticated: false,
    user: {
        _id: '',
        name: '',
        email: '',
        date_of_birth: null,
        verify: 0,
        bio: '',
        location: '',
        website: '',
        username: '',
        avatar: '',
        cover_photo: ''
    },
    loading: false
};
export const fetchUser = createAsyncThunk(
    //action type string
    'get/fetchUser',
    //callback function
    async () => {
        const result = await FetchAccount();
        return result.data
    }
)

const authAsyncSlice = createSlice({
    name: 'authSync',
    initialState,
    reducers: {
        doLoginAction: (state, action) => {
            console.log(action.payload);
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        doLogout: (state) => {
            state.isAuthenticated = false;
            state.user = {
                email: "",
                name: "",
                id: "",
                date_of_birth: ""
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = true;
                console.log(action)
                state.isAuthenticated = true;
                state.user = action.payload;
                localStorage.setItem('profile', JSON.stringify(action.payload))
            })
            .addCase(fetchUser.rejected, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = {
                    email: "",
                    name: "",
                    id: "",
                    date_of_birth: ""
                }
            })
    },
})
export const { doLoginAction, doLogout } = authAsyncSlice.actions
export default authAsyncSlice.reducer