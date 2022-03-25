import { Button, Stack, TextField, Typography } from "@mui/material"

const { Box } = require("@mui/system")

const SignUp = () => {
    return (
        <Box sx={{height:'100vh', width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Stack spacing={2} sx={{width:'400px'}} >
            <Typography sx={{textAlign: 'center'}}variant="h2" > Sign Up</Typography>
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