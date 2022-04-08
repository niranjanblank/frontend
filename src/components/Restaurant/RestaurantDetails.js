import { Button, CssBaseline, Dialog, Divider, Drawer, Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import {useNavigate, useParams, Link} from "react-router-dom"
import { addSingleReview } from "../../store/reviewSlice";
import FoodList from "./Food/FoodList";
import ReviewList from "./Review/ReviewList";

const RestaurantDetails = () => {

 
    
    const [openDialog,setOpenDialog] = useState(false)
    const [menuSelector,setMenuSelector] = useState('reviews')
    const [reviewText, setReviewText] = useState('')
    const [cookies, setCookie] = useCookies(['user']);
    const dispatch = useDispatch()
    let params = useParams()
    let navigate = useNavigate()
    useEffect(()=> {
        if(cookies.isUserLoggedIn){
            // do nothing
        }
        else{
            navigate("/")
        }
    }, [])


    const dialogHandler= () => {
        setOpenDialog(!openDialog)
    }


    const onSubmitReviewHandler = async () => {
        const date = new Date()

        const data = {
            email: cookies.email,
            restaurantId: parseInt(params.restaurantID),
            reviewText: reviewText,
            reviewTime: date.toISOString()
        }

        try {
            const reviewData = await axios.post('http://localhost:5000/api/review/addReview',data)
            dispatch(addSingleReview(reviewData.data))
            
        }
        catch(error){
            console.log(error.message)
        }
    }
    
    const onChangeReviewHandler = (event)=> {
        setReviewText(event.target.value)
    }
    

    // console.log(process.env.PUBLIC_URL+'assets/'+'restaurants/'+params.restaurantID+'.png')
    return (
        <>
        
            {/* Details */}
            <Box sx={{display:'flex'}}>
            <CssBaseline />
            <Drawer
                sx={{
                width: '400px',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: "400px",
                    boxSizing: 'border-box',
                },
                
                }}
                variant="permanent"
                anchor="left"
            >
                <Box sx={{display:'flex', flexDirection:'column',alignItems:'center', padding:'5px',justifyContent:'center',height:'100%'}}>
                    <img src={process.env.PUBLIC_URL+'/assets'+'/restaurants/'+params.restaurantID+'.png'} width="200px" height="150px"/>
                    <Box sx={{display:'flex',  flexDirection:'column',alignItems:'center'}}>
                        <Typography>Some Restaurant</Typography>
                        <Typography>Some Address</Typography>
                        <Typography sx={{textAlign:'justify', padding:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Box>
                    <Button sx={{width:'100%', borderRadius:'0px'}} variant={(menuSelector==='food')?'contained':'outlined'} onClick={()=> {setMenuSelector('food')}} >Choose Food</Button>
                    <Button sx={{width:'100%', borderRadius:'0px'}} variant={(menuSelector==='reviews')?'contained':'outlined'} onClick={()=> {setMenuSelector('reviews')}}>See Reviews</Button>

                </Box>
            </Drawer>
            
            {/* Reviews or food item */}
            <Box sx={{marginTop:'60px', width:'100%'}}>
            {(menuSelector==='reviews')?
            <ReviewList dialogHandler={dialogHandler} restaurant_id={params.restaurantID}/>:
            <FoodList restaurant_id={params.restaurantID} />}
            {/* <ReviewList dialogHandler={dialogHandler}/> */}
            
            </Box>
        </Box>

        {/* Dialog for adding review */}
        <Dialog
        maxWidth="md"
        open={openDialog}
        onClose={dialogHandler}>
            <Box sx={{width:'550px',paddingBottom:'10px'}}>
                <Stack spacing={2} sx={{padding:'10px'}}>
                <Typography sx={{textAlign:'center',marginTop:'10px'}}>Add A Review</Typography>
                <Divider/>
                <TextField
                    label="Review"
                    multiline
                    rows={4}
                    placeholder="Enter Your Review"
                    onChange={onChangeReviewHandler}
                    />
                <Button variant="contained" onClick={onSubmitReviewHandler}>Submit</Button>
                </Stack>
            </Box>
        </Dialog>
        </>
    )
}

export default RestaurantDetails