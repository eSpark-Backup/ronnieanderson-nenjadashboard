import { Box, TextField, Typography } from "@mui/material"

interface IProps {
  required?: boolean
  label: string
  placeholder: string
}

const CustomInput = ({ required, label, placeholder }: IProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography mb={1} textAlign="left">{label}{required ? "*" : ""}</Typography>
      <TextField sx={{ width: "100%", borderRadius: "5px" }} placeholder={placeholder} />
    </Box>
  )
}

export default CustomInput