import { Typography } from '@mui/material'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

const CustomPhone = () => {
    const onChange = (value: any) => {

    }

    return (
        <>
            <Typography textAlign="left">{"Phone Number"}</Typography>
            <PhoneInput
                country={'in'}
                placeholder="Enter phone number"
                onChange={onChange}
                onBlur={onChange}
            />
        </>
    )
}

export default CustomPhone