import { Button, CssBaseline, Dialog, Divider, Drawer, Fab, Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import SingleReview from "./SingleReview"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

import {useParams, Link} from "react-router-dom"
const RestaurantDetails = () => {

    const [openDialog,setOpenDialog] = useState(false)

    let params = useParams()

    const dialogHandler= () => {
        setOpenDialog(!openDialog)
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
                    <Button sx={{width:'100%'}} variant="contained" component={Link} to="/foods">Choose Food</Button>
                </Box>
            </Drawer>
            
            {/* Reviews */}
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
                        <SingleReview/>
                        <SingleReview/>
                        <SingleReview/>
                        <SingleReview/>

                    </Stack>
                </Stack>
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
                    />
                <Button variant="contained">Submit</Button>
                </Stack>
            </Box>
        </Dialog>
        </>
    )
}

export default RestaurantDetails