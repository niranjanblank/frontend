import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useLocation} from "react-router-dom"
import {Link} from "react-router-dom"
const Navbar = () => {
    const location = useLocation()
    const [isLogged,setIsLogged] = React.useState(false)
    React.useEffect(()=>{
        
        if(location.pathname=="/" || location.pathname=="/signup"){
            setIsLogged(false)
        }
        else(
            setIsLogged(true)
        )
    },[location])
    
    
    return (
        <>
        {isLogged?(  <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative" sx={{zIndex:1400, backgroundColor:'black'}} > 
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Foodie
                </Typography>
                <Button color="inherit" component={Link} to="/" >Log Out</Button>
                </Toolbar>
            </AppBar>
            </Box>):''}
        </>
  
    )
}

export default Navbar