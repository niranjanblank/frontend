import { Container, Divider, Grid, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import SingleFood from "./SingleFood"
import {useSelector} from "react-redux"

const FoodList = ({restaurant_id}) => {

   const foodDataAll = useSelector(state=>state.foodItems.data)
   const foodDataCurrent = foodDataAll.filter(food =>  restaurant_id==food.restaurant_id)
   console.log(foodDataCurrent)
    return (

              <Box sx={{ flexGrow: 1}} component="main" >
                 <Stack spacing={2}>

                 
                     <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', paddingY:'5px'}}>
                           <Typography sx={{textAlign:'center'}} variant="h3"> Food Items</Typography>
                     </Box>
                     <Divider/>
                     <Box sx={{paddingLeft: '40px'}}>

                        <Grid  container spacing={3} >
                           {foodDataCurrent.map(food=> (
                               <Grid key={`restro-${food.restaurant_id}-${food.id}`} item xs={6} md={4}>
                                 <SingleFood id={food.id}/>
                                 </Grid>
                           ))}
                          
                        </Grid>
                     </Box>
                     </Stack>
            </Box>
          
    
    )
}

export default FoodList