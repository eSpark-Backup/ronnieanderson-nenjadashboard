import { Button } from '@mui/material'
import { ReactElement } from 'react'

interface IProps {
    children: ReactElement | string
    sx?: any
}

const CustomButton = ({ sx, children }: IProps) => {
    return (
        <Button variant="contained" sx={{ width: "100%", height: "50px", backgroundColor: "#1D3B6A", borderRadius: "10px", ...sx }}>{children}</Button>
    )
}

export default CustomButton