import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: []
}

const foodItemSlice = createSlice({
    name: 'foodItems',
    initialState: initialState,
    reducers: {
        addAllFoodItems : (state, action)=> {
            state.data = action.payload.data
        }
    }
})

export const {addAllFoodItems} = foodItemSlice.actions

export default foodItemSlice.reducer