import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./components/Login/UserLogin";
import SignUp from "./components/SignUp/SingUp";


function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserLogin/>} /> 
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
