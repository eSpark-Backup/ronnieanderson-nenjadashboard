import React from 'react'
import { styles } from '../../utils/styles';
import { Box, Typography } from '@mui/material';
import { CustomButton, Table } from '../../components';
import QR from "../../assets/QR_Code_example.png"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { depositeData } from '../../constants';
import { columns } from '../../columns/deposite';

const Deposite = () => {
    const classes = styles.depositeStyle();
    return (
        <Table
            title='History'
            data={depositeData}
            upperNode={
                <Box className={classes.mainContainer}>
                    <Typography className={classes.mainHeading}>Deposite</Typography>
                    <Box className={classes.contentBoxParent}>
                        <Box className={classes.contentBox}>
                            <Box className={classes.contentBoxLeft}>
                                <CustomButton className={[classes.contentBoxLeftButton1]}>
                                    USDT - TRC20
                                </CustomButton>
                                <CustomButton className={[classes.contentBoxLeftButton2]}>
                                    USDT - BEP /BSC
                                </CustomButton>
                                <Typography className={classes.contentBoxLeftText}>
                                    Sending the wrong token or to the wrong network, will result in a loss of funds
                                </Typography>
                            </Box>
                            <Box className={classes.contentBoxRight}>
                                <Typography className={classes.contentBoxRightHead}>USDT - TRC20</Typography>
                                <img src={QR} alt='QR Code' />
                                <CustomButton endIcon={<ContentCopyIcon />} className={[classes.contentBoxRightButton]}>
                                    sd78542sd2265sd78542sd2265
                                </CustomButton>
                                <Typography className={classes.contentBoxRightFooter}>
                                    Send only <span className={classes.contentBoxRightBold}>USDT - TRC20</span> to your address
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            }
            columns={columns()}
            isLoading={false}
            total={40}
        />
    )
}

export default Deposite
