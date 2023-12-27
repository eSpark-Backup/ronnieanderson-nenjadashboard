import { useState } from "react"
import { Box, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { closeEye, eye } from "../../assets"
import { styles } from "../../utils/styles"



const CustomInput = ({ startIcon, required, label, placeholder, type, className, onChange, name, onBlur, value, error, helperText }: ICustomInput) => {
  const classes = styles.inputStyles()
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Box className={classes.container}>
      <Typography mb={1} textAlign="left">{label}{required ? "*" : ""}</Typography>
      <TextField
        helperText={error ? helperText : ""}
        error={!!error}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        className={className ? [classes.customInput, ...className].join(" ") : classes.customInput}
        placeholder={placeholder}
        InputProps={{
          startAdornment: startIcon ? (
            <InputAdornment position="end">
              <IconButton>{startIcon}</IconButton>
            </InputAdornment>
          ) : null,
          endAdornment: type === "password" ? (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <img
                    className={classes.img}
                    src={eye}
                    width={"15px"}
                    height={"15px"}
                    alt="eye"
                  />
                ) : (
                  <img
                    className={classes.img}
                    src={closeEye}
                    width={"15px"}
                    height={"15px"}
                    alt="eye"
                  />
                )}
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
      />

    </Box>
  )
}

export default CustomInput;
