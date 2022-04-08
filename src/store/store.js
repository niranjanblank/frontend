import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from "./restaurantSlice"
import foodItemReducer from "./foodItemSlice"
import cartSliceReducer from "./cartSlice"
import reviewSliceReducer from "./reviewSlice"
import orderSliceReducer from "./orderSlice"
import userSliceReducer from "./userSlice"
const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        foodItems: foodItemReducer,
        cart: cartSliceReducer,
        reviews: reviewSliceReducer,
        orders: orderSliceReducer,
        users: userSliceReducer
    }
})

export default store;