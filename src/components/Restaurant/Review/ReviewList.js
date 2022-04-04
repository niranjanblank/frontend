import { Box, Divider, Fab, Stack, Typography } from "@mui/material"
import SingleReview from "./SingleReview"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { useSelector } from "react-redux";
const ReviewList = ({dialogHandler, restaurant_id}) => {

    const reviewDataAll = useSelector(state=>state.reviews.data)
    const reviewDataCurrent = reviewDataAll.filter(review =>  restaurant_id==review.restaurant_id)

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
                        {reviewDataCurrent.length===0?"No Reviews Yet": reviewDataCurrent.map(review=> (
                            
                            <SingleReview key={`review-${restaurant_id}-review-${review.id}`} review={review}/>
                        )) }
    
                    </Stack>
                </Stack>
            </Box>
    )
}

export default ReviewList