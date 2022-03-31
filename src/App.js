import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./components/Login/UserLogin";
import Navbar from "./components/Navbar/Navbar";
import FoodList from "./components/Restaurant/Food/FoodList";
import RestaurantDetails from "./components/Restaurant/RestaurantDetails";
import RestaurantList from "./components/Restaurant/RestaurantList";
import SignUp from "./components/SignUp/SignUp";


function App() {
 
  return (
    <Box>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<UserLogin/>} /> 
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/restaurants" element={<RestaurantList/>}/>
            <Route path="/restaurants/:restaurantID" element={<RestaurantDetails/>}/>
            <Route path="/foods" element={<FoodList/>}/>

        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
