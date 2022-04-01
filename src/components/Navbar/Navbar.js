import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useLocation, useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import { useCookies } from 'react-cookie';
const Navbar = () => {
    const location = useLocation()
    const [isLogged,setIsLogged] = React.useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    let navigate= useNavigate()
    React.useEffect(()=>{
        
        if(location.pathname=="/" || location.pathname=="/signup"){
            setIsLogged(false)
        }
        else(
            setIsLogged(true)
        )
    },[location])
    
    const onLogoutHandler = () => {
        removeCookie('email',{path: "/"})
        removeCookie('password',{path: "/"})
        navigate("/")
    }
    return (
        <>
        {isLogged?(  <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{zIndex:1400, backgroundColor:'black', height: '60px'}} > 
                <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography sx={{textDecoration: 'none', color:'white'}} variant="h6" component={Link} to="/restaurants">
                        Foodie
                    </Typography>
                    <Button color="inherit" onClick={onLogoutHandler}>Log Out</Button>
                </Toolbar>
            </AppBar>
            </Box>):''}
        </>
  
    )
}

export default Navbar