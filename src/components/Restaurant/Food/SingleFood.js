import { Box, Button, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { addSingleItemToCart } from "../../../store/cartSlice"

const SingleFood = ({food}) => {

    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(addSingleItemToCart(food))
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