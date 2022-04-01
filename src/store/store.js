import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from "./restaurantSlice"
import foodItemReducer from "./foodItemSlice"
import cartSliceReducer from "./cartSlice"
const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        foodItems: foodItemReducer,
        cart: cartSliceReducer
    }
})

export default store;