import { Button, Stack, TextField, Typography } from "@mui/material"

const { Box } = require("@mui/system")

const SignUp = () => {
    return (
        <Box sx={{height:'100vh', width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Stack spacing={2} sx={{width:'400px'}} >
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                 <img src={process.env.PUBLIC_URL+'/assets/Logo.png'} width="200px" height="200px"/>
                </Box>
            <Typography sx={{textAlign: 'center'}}variant="h3" > Sign Up</Typography>
            
            <TextField label="First name"></TextField>
            <TextField label="Last name"></TextField>
            <TextField label="Email"></TextField>
            <TextField label="Password" ></TextField>
            <Button variant="contained" >Sign Up</Button>
        </Stack>
    </Box>
    )
}

export default SignUp