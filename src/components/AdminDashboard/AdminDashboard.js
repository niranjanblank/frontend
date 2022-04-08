import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material"
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useDispatch, useSelector } from "react-redux"
import { Link,Outlet, useNavigate } from "react-router-dom"
import { getAllFoodItemData, getAllOrderData, getAllRestaurantData, getAllReviewsData, getAllUsersData } from "../../store/asyncActions"

const drawerWidth = 240
const AdminDashboard = () => {
    const dispatch = useDispatch()
    const [cookies,setCookies] = useCookies(['user'])
    let navigate = useNavigate();

    useEffect(()=> {
        if(cookies.isAdminLoggedIn){
            //do nothing
        }
        else{
            navigate('/adminLogin')
        }
    },[])
    useEffect(()=> {
      dispatch(getAllRestaurantData())
      dispatch(getAllFoodItemData())
      dispatch(getAllReviewsData())
      dispatch(getAllOrderData())
      dispatch(getAllUsersData())
    },[])

   

    return (
            <Box sx={{ display: 'flex'}}>
              <CssBaseline />
              <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
              >
             
              </AppBar>
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                  },
                  paddingTop: '60px'
                }}
                variant="permanent"
                anchor="left"
              >
                <Toolbar />
              
                <List>
                
                    <ListItem button component={Link} to="/adminDashboard/restaurants">
                      <ListItemText primary="Restaurants" />
                    </ListItem>
                    <ListItem button component={Link} to="/adminDashboard/fooditems" >
                      <ListItemText primary="Food Items List" />
                    </ListItem>
                    <ListItem button component={Link} to="/adminDashboard/addfooditems" >
                      <ListItemText primary="Add Food Item" />
                    </ListItem>
                    <ListItem button  component={Link} to="/adminDashboard/reviews">
                      <ListItemText primary="Reviews" />
                    </ListItem>
                    <ListItem button  component={Link} to="/adminDashboard/orders">
                      <ListItemText primary="Orders" />
                    </ListItem>

              
                </List>
                <Divider />
              
              </Drawer>
              <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
              >
                <Toolbar />
                    <Outlet/>
              </Box>
            </Box>
    )
}

export default AdminDashboard