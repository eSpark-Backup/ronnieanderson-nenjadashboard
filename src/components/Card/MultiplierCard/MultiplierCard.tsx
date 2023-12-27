import { Box, Typography } from '@mui/material'
import StatusCard from '../StatusCard/StatusCard'
import CardLayout from '../CardLayout/CardLayout'
import { Amount, DailyProfit, Multiplier } from '../../../assets'
import { styles } from '../../../utils/styles'

const MultiplierCard = () => {
    const classes = styles.cardStyles({})
    return (
        <CardLayout className={[classes.multiCardContainer]}>
            <Box className={classes.multiCardFlex}>
                <Box className={classes.multiCardInnerBox}>
                    <Box>
                        <img src={Multiplier} alt='AvialableBalance' width={"40px"} />
                    </Box>

                    <Box>
                        <Typography color="white" fontSize="20px" fontWeight={600}>Multiplier</Typography>
                    </Box>
                    <Box>

                    </Box>
                </Box>
                <Box className={classes.multiCardContainer2}>
                    <Box className={classes.multiCardInnerBox2}>
                        <StatusCard icon={Amount} heading="Portfolio" value="$100,000" focus />
                        <Box className={classes.multiCardInnerBox3}>
                            <Box >
                                <img src={DailyProfit} alt="profit" width={"40px"} />
                            </Box>
                            <Box>
                                <Typography fontSize="12px">{"Profit"}</Typography>
                                <Typography color="black" fontSize="10px" fontWeight={600}>{"24 hours"}
                                </Typography>
                                <Typography color="#8DC63F" fontSize="20px" fontWeight={600}>{"$100"}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </CardLayout>
    )
}

export default MultiplierCard