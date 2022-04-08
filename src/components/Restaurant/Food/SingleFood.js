import { Box, Button, Typography } from "@mui/material"
import axios from "axios"
import { useCookies } from "react-cookie"
import { useDispatch, useSelector } from "react-redux"
import { addSingleItemToCart } from "../../../store/cartSlice"

const SingleFood = ({food}) => {

    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies(['user']);
    const cartId = useSelector(state=>state.cart.id)

   
    
    const addToCartHandler = async () => {

        const data = await axios.post('http://localhost:5000/api/cartitem/',{foodItemId: food.id, cartId:cartId})
        console.log(data)

        dispatch(addSingleItemToCart(data.data))
    }

    return (
       <>   
         <Box sx={{display:"flex",flexDirection:'column'
        ,width:"150px",
        justifyContent:'center',
        alignItems:'center',
        margin: '10px'
        }}>
            <img src={food.image} height="200px" width="200px"/>
            <Typography sx={{textAlign:'center'}}>{food.foodName}</Typography>
            <Button variant="contained" onClick={addToCartHandler}>Add to Cart</Button>
            </Box>
        </>
    )
}

export default SingleFood