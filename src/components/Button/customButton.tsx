import { Button } from '@mui/material'



const CustomButton = ({ sx, children, variant, color, onClick, type, startIcon, endIcon }: ICustomButton) => {
    return (
        <Button startIcon={startIcon} endIcon={endIcon} type={type} onClick={onClick} color={color} variant={variant || "contained"} sx={{ width: "100%", borderRadius: "10px", ...sx }}>{children}</Button>
    )
}

export default CustomButton