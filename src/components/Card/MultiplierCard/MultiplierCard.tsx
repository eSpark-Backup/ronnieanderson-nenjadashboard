import { Box, Typography } from '@mui/material'
import StatusCard from '../StatusCard/StatusCard'
import CardLayout from '../CardLayout/CardLayout'
import { Amount, DailyProfit, Multiplier } from '../../../assets'

const MultiplierCard = () => {
    return (
        <CardLayout sx={{ p: 0, height: "100%" }}>
            <Box sx={{ display: "flex", minHeight: "100%" }}>
                <Box sx={{
                    display: {
                        xs: "none",
                        md: "flex"
                    }, width: "30%", borderTopRightRadius: "15px", borderEndEndRadius: "15px", background: "#1D3B6A", flexDirection: "column", justifyContent: "center", alignItems: "center"
                }}>
                    <Box>
                        <img src={Multiplier} alt='AvialableBalance' width={"40px"} />
                    </Box>

                    <Box>
                        <Typography sx={{ color: "white", fontSize: "20px", fontWeight: 600 }}>Multiplier</Typography>
                    </Box>
                    <Box>

                    </Box>
                </Box>
                <Box sx={{
                    width: {
                        xs: "100%",
                        md: "70%"
                    }, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <StatusCard icon={Amount} heading="Portfolio" value="$100,000" focus />
                        <Box sx={{ display: "flex", gap: "5px", minWidth: "170px" }}>
                            <Box >
                                <img src={DailyProfit} alt="profit" width={"40px"} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "12px", }}>{"Profit"}</Typography>
                                <Typography sx={{ color: "black", fontSize: "10px", fontWeight: 600 }}>{"24 hours"}
                                </Typography>
                                <Typography sx={{ color: "#8DC63F", fontSize: "20px", fontWeight: 600 }}>{"$100"}
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