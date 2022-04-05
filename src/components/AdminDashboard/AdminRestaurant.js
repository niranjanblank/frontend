import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from "react-redux";
const AdminRestaurant = () => {

    const restaurantData = useSelector(state=> state.restaurants.data)

    return (
        <div>
            {restaurantData.map((restaurant,index)=> (
                 <Accordion key={`admin-restaurant-${index}`}>
                 <AccordionSummary
                   expandIcon={<ExpandMoreIcon />}
                 >  <Box sx={{display:'flex',alignItems:'center'}}>
                     <Avatar src={restaurant.image}/>
                   <Typography >{restaurant.name}</Typography>
                   </Box>
                 </AccordionSummary>
                 <AccordionDetails>
                     <Typography>
                         Address: {restaurant.address}
                     </Typography>
                   <Typography>
                     {restaurant.details}
                   </Typography>
                 </AccordionDetails>
               </Accordion>
            ))}
       
      
      </div>
    )
}

export default AdminRestaurant