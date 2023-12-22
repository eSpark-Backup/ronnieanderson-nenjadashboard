import { Button } from '@mui/material'
import { MouseEventHandler, ReactElement } from 'react'

interface IProps {
    children: ReactElement | string
    sx?: any,
    variant?: "contained" | "text" | "outlined",
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?: any,
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

const CustomButton = ({ sx, children, variant, color, onClick, type, startIcon, endIcon }: IProps) => {
    return (
        <Button startIcon={startIcon} endIcon={endIcon} type={type} onClick={onClick} color={color} variant={variant || "contained"} sx={{ width: "100%", borderRadius: "10px", ...sx }}>{children}</Button>
    )
}

export default CustomButton