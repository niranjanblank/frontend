import { Button, Dialog, Divider, Fab, Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import SingleReview from "./SingleReview"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
const RestaurantDetails = () => {

    const [openDialog,setOpenDialog] = useState(false)

    const dialogHandler= () => {
        setOpenDialog(!openDialog)
    }

    return (
        <>
        <Box sx={{display:'flex',flexDirection:'row'}}>
            {/* Details */}
            <Box sx={{width:'30%', display:'flex', flexDirection:'column',alignItems:'center', marginTop:'120px'}}>
                <img src={process.env.PUBLIC_URL+'assets/foodie.jpg'}/>
                <Typography>Some Restaurant</Typography>
                <Typography>Some Address</Typography>

            </Box>
            {/* Reviews */}
            <Box sx={{width:'70%',borderLeft:'1px solid black', height:'100vh'}}>
                
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