import { Box, Typography } from "@mui/material"
import {Link} from "react-router-dom"
const SingleRestaurant = ({data}) => {
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
        to={`/restaurants/${data.id}`}
        >
            <img src={data.image} height="200px" widht="150px"/>
            <Typography sx={{textAlign:'center', color:'black'}}>{data.name}</Typography>
            </Box>
        </>
    )
}

export default SingleRestaurant