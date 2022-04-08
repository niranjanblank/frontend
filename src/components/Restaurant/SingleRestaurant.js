import { Avatar, Box, Paper, Typography } from "@mui/material"
import {Link} from "react-router-dom"
const SingleRestaurant = ({data}) => {
    return (
       <>   

         <Box sx={{display:"flex",flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin: '10px',
        textDecoration: 'none'
     
        }}
        component={Link}
        to={`/restaurants/${data.id}`}
        >
            {/* <img src={data.image} height="200px" width="150px"/> */}
            <Avatar
                src={data.image}
                sx={{ width: '200px', height: '200px', border: '3px solid black' }}
            />
            <Typography sx={{textAlign:'center', color:'black'}}><strong>{data.name}</strong></Typography>
            </Box>

        </>
    )
}

export default SingleRestaurant