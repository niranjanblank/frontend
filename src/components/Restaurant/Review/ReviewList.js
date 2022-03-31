import { Box, Divider, Fab, Stack, Typography } from "@mui/material"
import SingleReview from "./SingleReview"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
const ReviewList = ({dialogHandler}) => {

  
    return (
        <Box sx={{ flexGrow: 1}} component="main" >
                
                <Stack sx={{width:'100%'}} spacing={2}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', paddingY:'5px'}}>
                    <Typography sx={{textAlign:'center'}} variant="h3"> Reviews</Typography>
                    <Fab sx={{marginLeft:'20px'}} color="primary" size="small" onClick={dialogHandler}>
                            <AddIcon />
                        </Fab>
                    </Box>
                    
                    <Divider/>
                    <Stack sx={{paddingX:'10px'}} spacing={2}>
                        <SingleReview/>
                        <SingleReview/>
                        <SingleReview/>
                        <SingleReview/>
                    </Stack>
                </Stack>
            </Box>
    )
}

export default ReviewList