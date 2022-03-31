import { Button, Stack, TextField, Typography } from "@mui/material"
import {Link} from "react-router-dom"

const { Box } = require("@mui/system")

const UserLogin = () => {

  

    return (
        <Box sx={{height:'100vh', width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Stack spacing={2} sx={{width:'400px'}} >
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                 <img src={process.env.PUBLIC_URL+'/assets/Logo.png'} width="200px" height="200px"/>
                </Box>
                <Typography sx={{textAlign: 'center'}}variant="h3" > Login</Typography>
                <TextField label="Email"></TextField>
                <TextField label="Password" ></TextField>
                <Button variant="contained" component={Link} to="/restaurants">Login</Button>
                <Typography sx={{textAlign: 'center'}}>Or</Typography>
                <Button variant="contained" color="warning" component={Link} to="/signup">Sign Up</Button>

            </Stack>
        </Box>
    )
}

export default UserLogin