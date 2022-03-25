import { Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import SingleFood from "./SingleFood"


const FoodList = () => {
    return (
        
            
           <Container maxWidth="lg" sx={{paddingTop:'20px'}}>
               <Typography textAlign={"center"}>Available Food</Typography>
            <Grid container spacing={3} >
                <Grid item xs={6} md={3}>
                   <SingleFood id={1}/>
                </Grid>
                <Grid item xs={6} md={3}>
                   <SingleFood id={2}/>
                </Grid>
                <Grid item xs={6} md={3}>
                   <SingleFood id={3}/>
                </Grid>
                <Grid item xs={6} md={3}>
                   <SingleFood id={4}/>
                </Grid>
                <Grid item xs={6} md={3}>
                   <SingleFood id={5}/>
                </Grid>
                <Grid item xs={6} md={3}>
                   <SingleFood id={6}/>
                </Grid>
                <Grid item xs={6} md={3}>
                   <SingleFood id={7}/>
                </Grid>
                <Grid item xs={6} md={3}>
                   <SingleFood id={8}/>
                </Grid>
            </Grid>
           </Container>
    
    )
}

export default FoodList