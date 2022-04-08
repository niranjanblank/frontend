import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {getFormattedDate} from "../../helperFunctions"
import { useCookies } from "react-cookie";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
const AdminReviews = () => {
    const reviewData = useSelector(state=>state.reviews.data)
    const restaurantData = useSelector(state=>state.restaurants.data)
    const [selectedRestaurant,setSelectedRestaurant] = useState('')
    const currentReviewData = reviewData.filter(review=>review.restaurant_id===selectedRestaurant)
    const [cookies,setCookies] = useCookies(['user'])
    let navigate = useNavigate();

    useEffect(()=> {
        if(cookies.isAdminLoggedIn){
            //do nothing
        }
        else{
            navigate('/adminLogin')
        }
    },[])



    const handleRestaurantChange = (event) => {
        setSelectedRestaurant(event.target.value)
    }

    return (
        <>
        <FormControl fullWidth>
         <InputLabel id="restaurant-label">Restaurant</InputLabel>
            <Select
            labelId="restaurant-label"
            id="restaurant"
            value={selectedRestaurant}
            label="restaurant"
            onChange={handleRestaurantChange}
            >
            {restaurantData.map((restaurant,index)=> (
                <MenuItem key={`restaurant-menu-item-${restaurant.id}`} value={restaurant.id}>{restaurant.name}</MenuItem>
    
            ))
            }
            </Select>
        </FormControl>
       <Typography sx={{marginY:'10px'}}>
           Reviews
       </Typography>
       <Box >
        {currentReviewData.length===0?'No Reviews Yet ':currentReviewData.map((review,index)=> (
            
              <Accordion key={`admin-restaurant-item${index}`}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >  
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography >{getFormattedDate(review.reviewTime)}</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    {review.reviewText}
                    </Typography>
                </AccordionDetails>
                </Accordion>
            
        ))}
        </Box>
        </>
    )
}

export default AdminReviews