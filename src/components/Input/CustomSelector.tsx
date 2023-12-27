import { Box, MenuItem, Select, Typography, SelectChangeEvent } from '@mui/material';
import { ReactNode } from 'react';
import { styles } from '../../utils/styles';



const CustomSelector = ({ label, placeholder, options, required, name, onChange, className }: ICustomSelector) => {
    const classes = styles.inputStyles()
    const handleSelectChange = (event: SelectChangeEvent<any>, child: ReactNode) => {
        // Check if onChange is defined before calling it
        if (onChange) {
            onChange(event, child, name || "");
        }
    };

    return (
        <Box>
            {label && <Typography textAlign="left" mb={1}>{label}{required ? "*" : ""}</Typography>}
            <Select
                className={className ? [classes.customInput, ...className].join(" ") : classes.customInput}
                id="demo-simple-select"
                placeholder={placeholder}
                defaultValue={options[0]?.value}
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
