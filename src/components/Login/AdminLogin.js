import { Button, Stack, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import {Link, useNavigate} from "react-router-dom"
import { toast } from "react-toastify"
const { Box } = require("@mui/system")

const AdminLogin = () => {
    const [cookies, setCookie] = useCookies(['user']);

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

    useEffect(()=>{
      const login = async () => {
        if(cookies.adminEmail && cookies.adminPassword){
          const loginData = {
            email: cookies.adminEmail,
            password: cookies.adminPassword
          }
          const {data} = await axios.post('http://localhost:5000/api/admin/login',loginData)
          
          if(data.data===true){
            toast.success('Logged in Successfully')
              navigate("/adminDashboard")
          }
          else{
              toast.error('Incorrect Credentials')
          }
        }
      }
       login()
    },[])
    const onLoginHandler = async () => {
        const loginData = {
            email: email,
            password: password
        }
        const {data} = await axios.post('http://localhost:5000/api/admin/login',loginData)
        
        if(data.data===true){
            toast.success('Logged in Successfully')
            setCookie('adminEmail', email, { path: '/' });
            setCookie('adminPassword', password, { path: '/' });
            setCookie('isAdminLoggedIn', true, {path: '/'})
            navigate("/adminDashboard")
        }
        else{
            toast.error('Incorrect Credentials')
        }
        
    }

    
    return (
        <Box sx={{height:'100vh', width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Stack spacing={2} sx={{width:'400px'}} >
              
                <Typography sx={{textAlign: 'center'}}variant="h3" > Admin Login</Typography>
                <TextField label="Email" onChange={(event)=>{onChangeHandler(event,'email')}}></TextField>
                <TextField type="password" label="Password" onChange={(event)=>{onChangeHandler(event,'password')}} ></TextField>
                <Button variant="contained" onClick={onLoginHandler}>Login</Button>
       

            </Stack>
        </Box>
    )
}

export default AdminLogin