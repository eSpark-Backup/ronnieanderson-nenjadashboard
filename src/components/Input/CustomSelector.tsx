import { MenuItem, Select, Typography } from '@mui/material'

interface IProps {
    label: string
    placeholder: string
    options: any
    required?: boolean
}

const CustomSelector = ({ label, placeholder, options, required }: IProps) => {
    return (
        <>
            <Typography textAlign="left">{label}{required ? "*" : ""}</Typography>
            <Select
                id="demo-simple-select"
                placeholder={placeholder}
                defaultValue={options[0]?.value}
                sx={{ width: "100%", borderRadius: "5px" }}
            >
                {options?.map((eachOption: any, index: number) => (
                    <MenuItem key={index} value={eachOption?.value}>
                        {eachOption?.text}
                    </MenuItem>
                ))}
            </Select>
        </>
    )
}

export default CustomSelector