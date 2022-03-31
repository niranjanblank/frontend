import { Button, Stack, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"

const { Box } = require("@mui/system")

const UserLogin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    let navigate = useNavigate();
    const onChangeHandler = (event,field)=> {
    
        if(field==='email'){
            setEmail(event.target.value)
        }
        else if(field==='password'){
            setPassword(event.target.value)
        }
    }

    const onLoginHandler = async () => {
        const loginData = {
            email: email,
            password: password
        }
        const {data} = await axios.post('http://localhost:5000/api/user/login',loginData)
        
        if(data.data===true){
            navigate("/restaurants")
        }
        console.log(data)
    }

    
    return (
        <Box sx={{height:'100vh', width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Stack spacing={2} sx={{width:'400px'}} >
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                 <img src={process.env.PUBLIC_URL+'/assets/Logo.png'} width="200px" height="200px"/>
                </Box>
                <Typography sx={{textAlign: 'center'}}variant="h3" > Login</Typography>
                <TextField label="Email" onChange={(event)=>{onChangeHandler(event,'email')}}></TextField>
                <TextField type="password" label="Password" onChange={(event)=>{onChangeHandler(event,'password')}} ></TextField>
                <Button variant="contained" onClick={onLoginHandler}>Login</Button>
                <Typography sx={{textAlign: 'center'}}>Or</Typography>
                <Button variant="contained" color="warning" component={Link} to="/signup">Sign Up</Button>

            </Stack>
        </Box>
    )
}

export default UserLogin