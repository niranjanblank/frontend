import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: []
}

const orderSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {
        addAllOrders : (state, action)=> {
            
            state.data = action.payload
        }
    }
})

export const {addAllOrders} = orderSlice.actions

export default orderSlice.reducer