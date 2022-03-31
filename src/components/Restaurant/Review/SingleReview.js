import { Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"

const SingleReview = () => {
    return (
        <Box component={Paper} sx={{padding: '20px'}} variant="outlined">
            <Typography sx={{color:'grey'}} variant="caption"> 
                March 21, 2022
            </Typography>
            <Typography>
                This is the best restaurant ever
            </Typography>
        </Box>
    )
}

export default SingleReview