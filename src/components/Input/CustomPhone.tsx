import { Box, Typography } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';



const CustomPhone = ({ onChange, name }: ICustomPhone) => {
    return (
        <Box>
            <Typography textAlign="left" sx={{ marginBottom: "5px" }}>{"Phone Number"}</Typography>
            <PhoneInput
                country={'in'}
                placeholder="Enter phone number"
                // inputProps={{name:name}}
                inputProps={{ name: "phone" }}
                onChange={onChange}
            />
        </Box>
    );
};

export default CustomPhone;
