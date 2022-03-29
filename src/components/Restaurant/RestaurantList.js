import { Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAllRestaurant } from "../../store/restaurantSlice"
import SingleRestaurant from "./SingleRestaurant"

const RestaurantList = () => {

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchAllRestaurant())
    },[])
    return (
        <Container sx={{paddingTop:'20px'}}>
            <Typography textAlign={"center"}>Choose Restaurant to order</Typography>
            <Grid container spacing={3} >
                <Grid item xs={6} md={3}>
                    <SingleRestaurant id={1}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant id={2}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant id={3}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant id={4}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant id={5}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant id={6}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant id={7}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant id={8}/>
                </Grid>
            </Grid>
            
        </Container>
    )
}

export default RestaurantList