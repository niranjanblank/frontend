import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, Container, Paper, Stack } from '@mui/material';
import { addAllCartItems, removeCartItem } from '../../store/cartSlice';
import axios from 'axios';

const Cart = ({handleClose}) => {

    const cartData = useSelector(state=>state.cart.data)
    const foodItems = useSelector(state=>state.foodItems.data)
    const [cartId,setCartId] = React.useState(null)
    const cartFoodData = cartData.map(cartitem => {
      if(cartId===null){
        setCartId(cartitem.cart_id)
      }
      return {...foodItems.filter(food=> food.id===cartitem.food_item_id)[0],cartItemId: cartitem.id}
    })
    console.log(cartFoodData)
    const dispatch = useDispatch()
    const onCartEmptyHandler =async () => {
        if(cartId===null){
          // do nothing
        }
        else{
          const data = await axios.delete('http://localhost:5000/api/cartitem/emptyCart',{data:{cartId: cartId}})
          dispatch(addAllCartItems({data: []}))
        }
        
    }

    const removeCartItemHandler = async (id) => {

        const data = await axios.delete('http://localhost:5000/api/cartitem',{data:{cartItemId: id}})
        console.log(data)

        dispatch(removeCartItem(id))
    }

    return (
        <div>
    
        <AppBar sx={{ position: 'relative', marginTop: '60px' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              MyCart
            </Typography>
            <Button autoFocus color="inherit" onClick={onCartEmptyHandler}>
              Empty Cart
            </Button>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Order
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
            <Stack spacing={1} sx={{marginTop:'10px',marginBottom:'10px'}}>
            {cartFoodData.map((data,index)=> (
                <div key={`cart-item-${index}`} >
                <Box sx={{display:'flex', justifyContent:'space-between', paddingLeft:'10px'}} component={Paper} elevation={2} >
                    <ListItemText primary={data.foodName} secondary={data.foodPrice} sx={{paddingY:'5px'}} />
                    <Button color="error" variant="contained" onClick={()=>{removeCartItemHandler(data.cartItemId)}}>X</Button>
                </Box>
                </div>
                
            ))}
          
          </Stack>
        </Container>
      
    </div>
    )
}

export default Cart