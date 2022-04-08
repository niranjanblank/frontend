import axios from "axios"
import { addAllCartItems } from "./cartSlice"
import { addAllFoodItems } from "./foodItemSlice"
import { addAllOrders } from "./orderSlice"
import { addAllRestaurants } from "./restaurantSlice"
import { addAllReviews } from "./reviewSlice"
import { addAllUsers } from "./userSlice"
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
        console.log(data)
        dispatch(addAllCartItems({data: data.data, id: data.id}))
    }
}

export const getAllOrderData = () => {
    return async dispatch => {
        const {data} = await axios.get('http://localhost:5000/api/order')

        dispatch(addAllOrders(data.data))
    }
}

export const getAllUsersData = () => {
    return async dispatch => {
        const {data} = await axios.get('http://localhost:5000/api/user')
 
        dispatch(addAllUsers(data.data))
    }
}
