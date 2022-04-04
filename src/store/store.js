import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from "./restaurantSlice"
import foodItemReducer from "./foodItemSlice"
import cartSliceReducer from "./cartSlice"
import reviewSliceReducer from "./reviewSlice"
const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        foodItems: foodItemReducer,
        cart: cartSliceReducer,
        reviews: reviewSliceReducer
    }
})

export default store;