import axios from "axios"
import { addAllRestaurants } from "./restaurantSlice"
export const getAllData =  () => {
    return async dispatch => {
        const {data} = await axios.get('http://localhost:5000/api/restaurant')
        dispatch(addAllRestaurants(data))
    } 
}