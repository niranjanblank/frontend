import { Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useDispatch, useSelector } from "react-redux"
import { getAllCartData, getAllFoodItemData, getAllRestaurantData, getAllReviewsData } from "../../store/asyncActions"
import { fetchAllRestaurant } from "../../store/restaurantSlice"
import SingleRestaurant from "./SingleRestaurant"

const RestaurantList = () => {

    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies(['user']);

    useEffect(()=> {
        // dispatch(fetchAllRestaurant())
        dispatch(getAllRestaurantData())
        dispatch(getAllFoodItemData())
        dispatch(getAllReviewsData())
        dispatch(getAllCartData(cookies.email))
    },[])
    const restaurantData = useSelector(state=> state.restaurants.data)
   
    return (
        <Container sx={{paddingTop:'20px', marginTop:'60px'}}>
            <Typography textAlign={"center"}>Choose Restaurant to order</Typography>
            
            <Grid container spacing={3} >
               {restaurantData.map((data,index)=>(
                   <Grid key={`dataRestro-${index}`} item xs={6} md={3}>
                        <SingleRestaurant data={data}/>
                    </Grid>
               ))}
            
            </Grid>
            
        </Container>
    )
}

export default RestaurantList