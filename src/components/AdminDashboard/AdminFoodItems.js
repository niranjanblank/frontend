import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCookies } from "react-cookie";
import {useNavigate} from "react-router-dom"
const AdminFoodItems = () => {
   
    const [cookies,setCookies] = useCookies(['user']) 
    const foodData = useSelector(state=>state.foodItems.data)
    const restaurantData = useSelector(state=>state.restaurants.data)
    const [selectedRestaurant,setSelectedRestaurant] = useState('')
    const currentFoodData = foodData.filter(food=>food.restaurant_id===selectedRestaurant)
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
           Items
       </Typography>
       <Box >
        {currentFoodData.length===0?'No food items added yet':currentFoodData.map((fooditem,index)=> (
            
              <Accordion key={`admin-restaurant-item${index}`}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >  
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography >{fooditem.foodName}</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Price: {fooditem.foodPrice}
                    </Typography>
                </AccordionDetails>
                </Accordion>
            
        ))}
        </Box>
        </>
    )
}

export default AdminFoodItems