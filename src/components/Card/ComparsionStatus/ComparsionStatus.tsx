import { Box, Typography } from '@mui/material'

const ComparsionStatus = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 600, }}>$15</Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#8DC63F" }}>+$15</Typography>
            <Typography sx={{ fontSize: "12px", color: "#7C7F84" }}>Today</Typography>
        </Box>
    )
}

export default ComparsionStatus