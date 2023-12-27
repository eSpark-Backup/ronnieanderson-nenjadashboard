import React from 'react'
import CardLayout from '../Card/CardLayout/CardLayout'
import { Box, Typography, Stack } from '@mui/material'
import CustomButton from '../Button/customButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { styles } from '../../utils/styles';

const Referral = () => {
    const classes = styles.referralStyles()
    return (
        <Stack direction={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        }} gap={2}>
            <Typography color="#1D3B6A" fontSize="22px" fontWeight="bold" mt="10px" pl="3px">Referral</Typography>
            <CardLayout className={[classes.layout]}>
                <Box p="10px">https://nenja.ai/en/1234567</Box>
                <Stack direction="row" pr="10px" pl="5x" flexWrap="wrap" gap="5px">
                    <CustomButton className={[classes.buttons]} startIcon={<ContentCopyIcon />}>Copy link</CustomButton>
                    <CustomButton className={[classes.buttons]} startIcon={<QrCodeScannerIcon />}>Scan Code</CustomButton>
                </Stack>
            </CardLayout>
        </Stack>
    )
}

export default Referral
