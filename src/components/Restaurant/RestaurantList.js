import { Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import SingleRestaurant from "./SingleRestaurant"

const RestaurantList = () => {
    return (
        <Container sx={{paddingTop:'20px'}}>
            <Typography textAlign={"center"}>Choose Restaurant to order</Typography>
            <Grid container spacing={3} >
                <Grid item xs={6} md={3}>
                    <SingleRestaurant/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <SingleRestaurant/>
                </Grid>
            </Grid>
            
        </Container>
    )
}

export default RestaurantList