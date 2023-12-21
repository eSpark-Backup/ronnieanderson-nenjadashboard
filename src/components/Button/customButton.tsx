import { Button } from '@mui/material'
import { ReactElement } from 'react'

interface IProps {
    children: ReactElement | string
    sx?: any,
    variant?: "contained" | "text" | "outlined"
}

const CustomButton = ({ sx, children, variant }: IProps) => {
    return (
        <Button variant={variant || "contained"} sx={{ width: "100%", borderRadius: "10px", ...sx }}>{children}</Button>
    )
}

export default CustomButton