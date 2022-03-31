import { Container, Divider, Grid, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import SingleFood from "./SingleFood"


const FoodList = () => {
    return (
        
            
          
              <Box sx={{ flexGrow: 1}} component="main" >
                 <Stack spacing={2}>

                 
                     <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', paddingY:'5px'}}>
                           <Typography sx={{textAlign:'center'}} variant="h3"> Food Items</Typography>
                     </Box>
                     <Divider/>
                     <Box sx={{paddingLeft: '40px'}}>
                        <Grid  container spacing={3} >
                           <Grid item xs={6} md={4}>
                              <SingleFood id={1}/>
                           </Grid>
                           <Grid item xs={6} md={4}>
                              <SingleFood id={2}/>
                           </Grid>
                           <Grid item xs={6} md={4}>
                              <SingleFood id={3}/>
                           </Grid>
                           <Grid item xs={6} md={4}>
                              <SingleFood id={4}/>
                           </Grid>
                           <Grid item xs={6} md={4}>
                              <SingleFood id={5}/>
                           </Grid>
                           <Grid item xs={6} md={4}>
                              <SingleFood id={6}/>
                           </Grid>
                           <Grid item xs={6} md={4}>
                              <SingleFood id={7}/>
                           </Grid>
                           <Grid item xs={6} md={4}>
                              <SingleFood id={8}/>
                           </Grid>
                        </Grid>
                     </Box>
                     </Stack>
            </Box>
          
    
    )
}

export default FoodList