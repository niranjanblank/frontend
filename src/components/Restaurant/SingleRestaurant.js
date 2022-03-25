import { Box, Typography } from "@mui/material"
import {Link} from "react-router-dom"
const SingleRestaurant = ({id}) => {
    return (
       <>   
         <Box sx={{display:"flex",flexDirection:'column'
        ,width:"150px",
        justifyContent:'center',
        alignItems:'center',
        margin: '10px',
        textDecoration: 'none'
     
        }}
        component={Link}
        to={`/restaurants/${id}`}
        >
            <img src={process.env.PUBLIC_URL+'/assets/restaurants/'+id+'.png'} height="200px" widht="150px"/>
            <Typography sx={{textAlign:'center', color:'black'}}>Some Restaurant</Typography>
            </Box>
        </>
    )
}

export default SingleRestaurant