import { Stack } from '@mui/material'
import React from 'react'
import CardLayout from '../Card/CardLayout/CardLayout'
import CustomButton from '../Button/customButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styles } from '../../utils/styles';

const Tabs = () => {
    const classes = styles.referralStyles()
    return (
        <Stack direction={"row"} gap={2}>
            <CardLayout className={[classes.tabsLayout]}>
                <Stack direction="row" justifyContent="space-between" px="10px" flexWrap="wrap" gap="5px">
                    <CustomButton className={[classes.buttons]} startIcon={<ArrowBackIosIcon />}>Side A</CustomButton>
                    <CustomButton className={[classes.buttons]} endIcon={<ArrowForwardIosIcon />}>Side B</CustomButton>
                </Stack>
            </CardLayout>
        </Stack>
    )
}

export default Tabs
