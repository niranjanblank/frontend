import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: [],
    id: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addAllCartItems : (state, action)=> {
            state.data = action.payload.data
            state.id = action.payload.id
        },
        addSingleItemToCart : (state, action) => {
            
            state.data.push(action.payload.data)
        },
        removeCartItem : (state,action)=> {
            console.log('inside reducer',action.payload)
            state.data = state.data.filter(singleData=> singleData.id!==action.payload)
            
            // state.data = state.data.filter()
            // console.log(newData)
        }
    }
})

export const {addAllCartItems, addSingleItemToCart, removeCartItem} = cartSlice.actions

export default cartSlice.reducer