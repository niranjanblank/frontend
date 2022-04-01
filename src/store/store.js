import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from "./restaurantSlice"
import foodItemReducer from "./foodItemSlice"
const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        foodItems: foodItemReducer
    }
})

export default store;