import { Stack } from '@mui/system'
import React from 'react'
import CardLayout from '../Card/CardLayout/CardLayout'
import CustomButton from '../Button/customButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Tabs = () => {
    return (
        <Stack direction={"row"} gap={2}>
            <CardLayout sx={{ width: "100%", minHeight: "40px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", paddingRight: "10px", paddingLeft: "10px", gap:"5px" }}>
                    <CustomButton sx={{ backgroundColor: "#AFB1AE", height: "40px", fontSize: "15px", width: "150px" }} startIcon={<ArrowBackIosIcon />}>Side A</CustomButton>
                    <CustomButton sx={{ backgroundColor: "#AFB1AE", height: "40px", fontSize: "15px", width: "150px" }} endIcon={<ArrowForwardIosIcon />}>Side B</CustomButton>
                </div>
            </CardLayout>
        </Stack>
    )
}

export default Tabs
