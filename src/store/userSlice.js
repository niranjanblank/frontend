import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: []
}

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addAllUsers : (state, action)=> {
            state.data = action.payload
        }
    }
})

export const {addAllUsers} = userSlice.actions

export default userSlice.reducer