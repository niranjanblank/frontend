import { Button, FormControl, Input, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addSingleFoodItem } from "../../store/foodItemSlice"
import {useNavigate} from "react-router-dom"
import { useCookies } from "react-cookie"
import { toast } from "react-toastify"
const AdminAddFoodItem = () => {

    const [cookies,setCookies] = useCookies(['user'])
    const restaurantData = useSelector(state=>state.restaurants.data)
    const [selectedRestaurant,setSelectedRestaurant] = useState('')
    const [foodName,setFoodName] = useState('')
    const [foodPrice,setFoodPrice] = useState('')
    const [imageFile,setImageFile] = useState(null)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    useEffect(()=> {
        if(cookies.isAdminLoggedIn){
            //do nothing
        }
        else{
            navigate('/adminLogin')
        }
    },[])



    const handleRestaurantChange = (event) => {
        setSelectedRestaurant(event.target.value)
    }

    const textFieldOnChangeHandler = (event,type) => {
        if(type==='foodName'){
            setFoodName(event.target.value)
        }
        else if(type==='foodPrice'){
            setFoodPrice(event.target.value)
        }
    }
    const imageHandler = (event) => {
        let value = event.target.value
        // slicing the array by last element and taking that element
        let imageName = value.split("\\").slice(-1)[0]
        // setPhoto(imageName)
        const fileList = event.target.files
        setImageFile(fileList[0])
    }

    const onSubmitHandler = async () => {
        let newFormData = new FormData()
        newFormData.append('foodName',foodName)
        newFormData.append('foodPrice',foodPrice)
        newFormData.append('restaurantId',selectedRestaurant)
        newFormData.append('image',imageFile)

        try{
            const data =await axios({
                method: "post",
                url: 'http://localhost:5000/api/fooditem',
                data: newFormData,
                headers: { "Content-Type": "multipart/form-data" },
              })
            toast.success('Food Item Added Successfully')
            dispatch(addSingleFoodItem(data.data))
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <Stack spacing={2}>
          <TextField id="foodname"  fullWidth label="Food Name" variant="outlined" onChange={(event)=>{textFieldOnChangeHandler(event,'foodName')}} />
          <TextField id="foodprice"  fullWidth label="Food Price" variant="outlined" onChange={(event)=>{textFieldOnChangeHandler(event,'foodPrice')}} />
          
        <FormControl fullWidth>
         <InputLabel id="restaurant-label">Restaurant</InputLabel>
            <Select
            labelId="restaurant-label"
            id="restaurant"
            value={selectedRestaurant}
            label="restaurant"
            onChange={handleRestaurantChange}
            >
            {restaurantData.map((restaurant,index)=> (
                <MenuItem key={`restaurant-menu-item-${restaurant.id}`} value={restaurant.id}>{restaurant.name}</MenuItem>
    
            ))
            }
            </Select>
        </FormControl>
        <label htmlFor="foodImage">
                <Input sx={{display: 'none'}} accept="image/*" id="foodImage" onChange={(event)=> {imageHandler(event)}} type="file" />
                <Button fullWidth variant="outlined" component="span">
                     Upload Image {imageFile!==null?`[${imageFile.name}]`:''}
                </Button>
        </label>
        <Button sx={{background:'black',
        '&:hover': {
            backgroundColor: '#424242',
            color: '#fff',
        }}} 
        variant="contained"
        onClick = {onSubmitHandler}
        >Submit Item</Button>
        </Stack>
    )
}

export default AdminAddFoodItem