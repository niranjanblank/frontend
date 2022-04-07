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
        },
        addSingleFoodItem: (state,action)=> {
            state.data.push(action.payload.data)
        }
    }
})

export const {addAllFoodItems, addSingleFoodItem} = foodItemSlice.actions

export default foodItemSlice.reducer