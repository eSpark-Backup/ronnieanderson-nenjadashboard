import { ReactNode, useState, ChangeEventHandler, FocusEventHandler } from "react"
import { Box, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { closeEye, eye } from "../../assets"

interface IProps {
  required?: boolean
  label?: string
  placeholder: string,
  type: string
  sx?: any
  startIcon?: ReactNode,
  onChange: ChangeEventHandler<HTMLInputElement>,
  onBlur?: FocusEventHandler<HTMLInputElement>,
  name: string,
  value?: string,
  error?: boolean,
  helperText?: string
}

const CustomInput = ({ startIcon, required, label, placeholder, type, sx, onChange, name, onBlur, value, error, helperText }: IProps) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Box sx={{ width: "100%" }}>
      <Typography mb={1} textAlign="left">{label}{required ? "*" : ""}</Typography>
      <TextField
        helperText={error ? helperText : ""}
        error={!!error}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        sx={{ width: "100%", borderRadius: "5px", ...sx }}
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
                    style={{ objectFit: "contain" }}
                    src={eye}
                    width={"15px"}
                    height={"15px"}
                    alt="eye"
                  />
                ) : (
                  <img
                    style={{ objectFit: "contain" }}
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
