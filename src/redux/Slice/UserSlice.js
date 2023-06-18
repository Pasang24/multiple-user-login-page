import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    user: null
} 

export let UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
            localStorage.removeItem("token");
        }
    },
})

export const { setUser, logout } = UserSlice.actions

export default UserSlice.reducer