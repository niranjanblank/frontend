import { Box, Button, Typography } from "@mui/material"

const SingleFood = ({id}) => {
    return (
       <>   
         <Box sx={{display:"flex",flexDirection:'column'
        ,width:"150px",
        justifyContent:'center',
        alignItems:'center',
        margin: '10px'
        }}>
            <img src={process.env.PUBLIC_URL+'/assets/'+'foods/'+id+'.png'} height="200px" width="200px"/>
            <Typography sx={{textAlign:'center'}}>Some Food</Typography>
            <Button variant="contained">Order</Button>
            </Box>
        </>
    )
}

export default SingleFood