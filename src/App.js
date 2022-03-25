import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./components/Login/UserLogin";
import RestaurantDetails from "./components/Restaurant/RestaurantDetails";
import RestaurantList from "./components/Restaurant/RestaurantList";
import SignUp from "./components/SignUp/SingUp";


function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserLogin/>} /> 
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/restaurants" element={<RestaurantList/>}/>
            <Route path="/restaurantDetails" element={<RestaurantDetails/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
