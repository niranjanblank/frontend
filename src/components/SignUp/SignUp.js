import { Button, Stack, TextField, Box,  Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"

const SignUp = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onChangeHandler = (event,field)=> {
        if(field==='firstName'){
            setFirstName(event.target.value)
        }
        else if(field==='lastName'){
            setLastName(event.target.value)
        }
        else if(field==='email'){
            setEmail(event.target.value)
        }
        else if(field==='password'){
            setPassword(event.target.value)
        }
    }

    const onSignUpHandler = async () => {
        const signUpData = {
            email: email, 
            password: password, 
            lastName: lastName, 
            firstName: firstName
        }
        try{
            const userData =  await axios.post('http://localhost:5000/api/user/signup',signUpData)
            console.log('sign up', userData)
            toast.success('Account Registered')
        }
        catch(error){
            toast.error('Account counldnt be created')
        }
    }

    return (
        <Box sx={{height:'100vh', width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Stack spacing={2} sx={{width:'400px'}} >
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                 <img src={process.env.PUBLIC_URL+'/assets/Logo.png'} width="200px" height="200px"/>
                </Box>
            <Typography sx={{textAlign: 'center'}}variant="h3" > Sign Up</Typography>
            
            <TextField label="First name" onChange={(event)=> {onChangeHandler(event,'firstName')}}></TextField>
            <TextField label="Last name" onChange={(event)=> {onChangeHandler(event,'lastName')}}></TextField>
            <TextField label="Email" onChange={(event)=> {onChangeHandler(event,'email')}}></TextField>
            <TextField type="password" label="Password" onChange={(event)=> {onChangeHandler(event,'password')}}></TextField>
            <Button variant="contained" onClick={onSignUpHandler} >Sign Up</Button>
        </Stack>
    </Box>
    )
}

export default SignUp