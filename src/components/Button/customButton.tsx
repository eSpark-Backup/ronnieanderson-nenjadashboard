import { Button } from '@mui/material'
import { ReactElement } from 'react'

interface IProps {
    children: ReactElement | string
    sx?: any,
    variant?: "contained" | "text" | "outlined",
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined
}

const CustomButton = ({ sx, children, variant, color }: IProps) => {
    return (
        <Button color={color} variant={variant || "contained"} sx={{ width: "100%", borderRadius: "10px", ...sx }}>{children}</Button>
    )
}

export default CustomButton