import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate, Navigate } from "react-router-dom";
import AdminAddFoodItem from "./components/AdminDashboard/AdminAddFoodItem";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminFoodItems from "./components/AdminDashboard/AdminFoodItems";
import AdminOrders from "./components/AdminDashboard/AdminOrders";
import AdminRestaurant from "./components/AdminDashboard/AdminRestaurant";
import AdminReviews from "./components/AdminDashboard/AdminReviews";
import AdminLogin from "./components/Login/AdminLogin";
import UserLogin from "./components/Login/UserLogin";
import Navbar from "./components/Navbar/Navbar";
import FoodList from "./components/Restaurant/Food/FoodList";
import RestaurantDetails from "./components/Restaurant/RestaurantDetails";
import RestaurantList from "./components/Restaurant/RestaurantList";
import SignUp from "./components/SignUp/SignUp";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cookies,setCookies] = useCookies(['user'])

  
  
  return (
    <Box>
        <ToastContainer/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          
            <Route path="/" element={<UserLogin/>} /> 
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/restaurants" element={<RestaurantList/>}/>
            <Route path="/restaurants/:restaurantID" element={<RestaurantDetails/>}/>
            <Route path="/foods" element={<FoodList/>}/> 
            <Route path="/adminLogin" element={<AdminLogin/>} />
            <Route path="/adminDashboard" element={<AdminDashboard/>} >
              <Route path="restaurants" element={<AdminRestaurant/>}/>
              <Route path="reviews" element={<AdminReviews/>}/>
              <Route path="fooditems"  element={<AdminFoodItems/>} />
              <Route path="addfooditems"  element={<AdminAddFoodItem/>} />
              <Route path="orders" element={<AdminOrders/>} />
            </Route>
            <Route path="*" element={<Navigate to="/"/>}/>

        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
