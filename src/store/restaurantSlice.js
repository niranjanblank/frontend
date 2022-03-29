import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";
    
export const fetchAllRestaurant =  createAsyncThunk('fetchAllRestaurant', async ()=> {
    try{

        const {data}= await axios.get('http://localhost:5000/api/restaurant');
        console.log(data)
        return data
    }
    catch(error){
        console.log(error)
    }
})

const initialState = {
    data: ['a']
}
const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState: initialState,
    reducers: {
        addAllRestaurants : (state,payload)=> {
            state.data = payload
        }
    },
    extraReducers : {
        [fetchAllRestaurant.pending](state){
            
        },
        [fetchAllRestaurant.fulfilled](state,{payload}){
            state.data = payload
        },
        [fetchAllRestaurant.rejected](state){

        }
    }
})

export const {addAllRestaurants} = restaurantSlice.actions;

export default restaurantSlice.reducer