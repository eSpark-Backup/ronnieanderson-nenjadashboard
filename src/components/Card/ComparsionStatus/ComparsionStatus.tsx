import { Stack, Typography } from '@mui/material'

const ComparsionStatus = () => {
    return (
        <Stack direction="row" alignItems="center" mt={1}>
            <Typography fontSize="14px" fontWeight={600}>$15</Typography>
            <Typography fontSize="14px" fontWeight={600} color="#8DC63F">+$15</Typography>
            <Typography fontSize="12px" color="#7C7F84">Today</Typography>
        </Stack>
    )
}

export default ComparsionStatus