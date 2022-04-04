import { Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"

const SingleReview = ({review}) => {
    return (
        <Box component={Paper} sx={{padding: '20px'}} variant="outlined">
            <Typography sx={{color:'grey'}} variant="caption"> 
                {review.reviewTime}
            </Typography>
            <Typography>
                {review.reviewText}
            </Typography>
        </Box>
    )
}

export default SingleReview