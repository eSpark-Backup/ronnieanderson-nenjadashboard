import { Box, MenuItem, Select, Typography, SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';



const CustomSelector = ({ label, placeholder, options, required, name, onChange, className }: ICustomSelector) => {
    const handleSelectChange = (event: SelectChangeEvent<any>, child: ReactNode) => {
        // Check if onChange is defined before calling it
        if (onChange) {
            onChange(event, child, name || "");
        }
    };

    return (
        <Box>
            {label && <Typography textAlign="left" sx={{ marginBottom: "5px" }}>{label}{required ? "*" : ""}</Typography>}
            <Select
                className={className}
                id="demo-simple-select"
                placeholder={placeholder}
                defaultValue={options[0]?.value}
                sx={{ width: "100%", borderRadius: "5px", border:"1px solid #D7D7D7" }}
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
