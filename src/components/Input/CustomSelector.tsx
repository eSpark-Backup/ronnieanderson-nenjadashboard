import { Box, MenuItem, Select, Typography, SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';



const CustomSelector = ({ label, placeholder, options, required, name, onChange }: ICustomSelector) => {
    const handleSelectChange = (event: SelectChangeEvent<any>, child: ReactNode) => {
        // Call the parent's onChange handler with the 'name' attribute
        onChange(event, child, name);
    };

    return (
        <Box>
            <Typography textAlign="left" sx={{ marginBottom: "5px" }}>{label}{required ? "*" : ""}</Typography>
            <Select
                id="demo-simple-select"
                placeholder={placeholder}
                defaultValue={options[0]?.value}
                sx={{ width: "100%", borderRadius: "5px" }}
                onChange={handleSelectChange} // Use the local handleSelectChange function
            >
                {options?.map((eachOption: any, index: number) => (
                    <MenuItem key={index} value={eachOption?.value}>
                        {eachOption?.text}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
};

export default CustomSelector;
