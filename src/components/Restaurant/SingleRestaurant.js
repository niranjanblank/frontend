import { Box, Typography } from "@mui/material"

const SingleRestaurant = () => {
    return (
       <>   
         <Box sx={{display:"flex",flexDirection:'column'
        ,width:"150px",
        justifyContent:'center',
        alignItems:'center',
        margin: '10px'
        }}>
            <img src={process.env.PUBLIC_URL+'/assets/foodie.jpg'} height="200px" widht="150px"/>
            <Typography sx={{textAlign:'center'}}>Some Restaurant</Typography>
            </Box>
        </>
    )
}

export default SingleRestaurant