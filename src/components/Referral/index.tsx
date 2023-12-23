import React from 'react'
import CardLayout from '../Card/CardLayout/CardLayout'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'
import CustomButton from '../Button/customButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const Referral = () => {
    return (
        <Stack direction={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        }} gap={2}>
            <Typography sx={{ color: "#1D3B6A", fontSize: "22px", fontWeight: "bold", marginTop: "10px", paddingLeft:"3px" }}>Referral</Typography>
            <CardLayout sx={{ width: "100%", display: "flex", justifyContent: "space-between", minHeight: "40px", flexWrap: "wrap" }}>
                <div style={{ padding: "10px" }}>https://nenja.ai/en/1234567</div>
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", paddingRight: "10px" , paddingLeft:"5px" }}>
                    <CustomButton sx={{ backgroundColor: "#AFB1AE", height: "40px", fontSize: "15px", width: "150px" }} startIcon={<ContentCopyIcon />}>Copy link</CustomButton>
                    <CustomButton sx={{ backgroundColor: "#AFB1AE", height: "40px", fontSize: "15px", width: "150px" }} startIcon={<QrCodeScannerIcon />}>Scan Code</CustomButton>
                </div>
            </CardLayout>
        </Stack>
    )
}

export default Referral
