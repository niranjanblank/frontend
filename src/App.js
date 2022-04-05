import { Box } from "@mui/system";
import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminFoodItems from "./components/AdminDashboard/AdminFoodItems";
import AdminRestaurant from "./components/AdminDashboard/AdminRestaurant";
import AdminReviews from "./components/AdminDashboard/AdminReviews";
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
            <Route path="/adminDashboard" element={<AdminDashboard/>} >
              <Route path="restaurants" element={<AdminRestaurant/>}/>
              <Route path="reviews" element={<AdminReviews/>}/>
              <Route path="fooditems"  element={<AdminFoodItems/>} />
            </Route>

        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
