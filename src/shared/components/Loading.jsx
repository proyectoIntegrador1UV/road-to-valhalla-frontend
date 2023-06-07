import { Box, CircularProgress } from '@mui/material';
import './../../style.css';

function Loading() {
    return (
        <Box>
            <CircularProgress size={80}/>
        </Box>
    )
}

export default Loading;