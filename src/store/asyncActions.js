import axios from "axios"
import { addAllCartItems } from "./cartSlice"
import { addAllFoodItems } from "./foodItemSlice"
import { addAllRestaurants } from "./restaurantSlice"
import { addAllReviews } from "./reviewSlice"
export const getAllRestaurantData =  () => {
    return async dispatch => {
        const {data} = await axios.get('http://localhost:5000/api/restaurant')
        dispatch(addAllRestaurants(data))
    } 
}


export const getAllFoodItemData = () => {
    return async dispatch => {
        const {data} = await axios.get('http://localhost:5000/api/fooditem')
        dispatch(addAllFoodItems(data))
    }
}   

export const getAllReviewsData = () => {
    return async dispatch => {
        const {data} = await axios.get('http://localhost:5000/api/review')
        dispatch(addAllReviews(data))
    }
}   

export const getAllCartData = (email) => {
    return async dispatch => {
        const {data} = await axios.post('http://localhost:5000/api/cartitem/getCart',{email: email})
       
        dispatch(addAllCartItems(data))
    }
}
