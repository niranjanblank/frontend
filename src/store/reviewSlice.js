import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: []
}

const reviewSlice = createSlice({
    name: 'reviews',
    initialState: initialState,
    reducers: {
        addAllReviews : (state, action)=> {
            state.data = action.payload.data
        },
        addSingleReview: (state, action)=> {
            state.data.push(action.payload.data)
        }
    }
})

export const {addAllReviews,addSingleReview} = reviewSlice.actions

export default reviewSlice.reducer