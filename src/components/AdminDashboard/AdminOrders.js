import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, Divider } from "@mui/material"
import { useSelector } from "react-redux"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getFormattedDate } from "../../helperFunctions";
import { useCookies } from "react-cookie";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
const AdminOrders = () => {
    const usersData = useSelector(state=> state.users.data)
    const orderData = useSelector(state=> state.orders.data)
    const foodItemData = useSelector(state=> state.foodItems.data)
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
    
    const getFoodName = (foodId) => {

        const singleFood = foodItemData.filter(food=> food.id===foodId)[0]
    
     
        return singleFood.foodName
    }

    const getUserName = (userId) => {
        const singleUser = usersData.filter(user=> user.id===userId)[0]
        if(singleUser){

            return singleUser.firstName+' '+singleUser.lastName || ''
        }
        else{
            return ''
        }
    }
   
    return (
        <div>
        {orderData.map((order,index)=> (
             <Accordion key={`admin-order-${index}`}>
             <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
             >  <Box sx={{display:'flex',alignItems:'center'}}>
               <Typography >{getFormattedDate(order[0].order_time)}</Typography>
               </Box>
             </AccordionSummary>
            
             <AccordionDetails>
                 Ordered By: {getUserName(order[0].user_id)}
                 <Divider/>
                 {order.map((element,index2)=>(
                     <Box key={`order-${index}item-${index2}`}>
                     <Typography>
                        Food Item: {getFoodName(element.food_item_id)}
                    </Typography>
                 </Box>
                 
                 ))}
                 
               <Typography>
                 {/* {restaurant.details} */}
               </Typography>
             </AccordionDetails>
           </Accordion>
        ))}
   
  
  </div>
    )
}

export default AdminOrders