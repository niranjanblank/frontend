import { Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllData } from "../../store/asyncActions"
import { fetchAllRestaurant } from "../../store/restaurantSlice"
import SingleRestaurant from "./SingleRestaurant"

const RestaurantList = () => {

    const dispatch = useDispatch()
    useEffect(()=> {
        // dispatch(fetchAllRestaurant())
        dispatch(getAllData())
    },[])
    const restaurantData = useSelector(state=> state.restaurants.data)
   
    return (
        <Container sx={{paddingTop:'20px'}}>
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