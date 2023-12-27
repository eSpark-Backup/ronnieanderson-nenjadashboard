import { Button } from '@mui/material'
import { styles } from '../../utils/styles'



const CustomButton = ({ className, children, variant, color, onClick, type, startIcon, endIcon }: ICustomButton) => {
    const classes = styles.customButtonStyles()
    return (
        <Button
            startIcon={startIcon}
            endIcon={endIcon}
            type={type}
            onClick={onClick}
            color={color}
            variant={variant || "contained"}
            className={className ? [classes.root, ...className].join(" ") : classes.root}
        >
            {children}
        </Button>
    )
}

export default CustomButton