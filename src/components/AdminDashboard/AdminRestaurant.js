import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
const AdminRestaurant = () => {

    const restaurantData = useSelector(state=> state.restaurants.data)
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