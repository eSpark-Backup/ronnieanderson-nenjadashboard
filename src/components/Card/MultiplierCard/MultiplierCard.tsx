import { Box, Typography } from '@mui/material'
import Multiplier from '../../../assets/Multiplier.png'
import CardLayout from '../CardLayout/CardLayout'
import StatusCard from '../StatusCard/StatusCard'
import Amount from "../../../assets/Amount.png"

const MultiplierCard = () => {
    return (
        <CardLayout sx={{  p: 0, height: "100%" }}>
            <Box sx={{ display: "flex", minHeight: "100%" }}>
                <Box sx={{display: {
                    xs: "none",
                    md: "flex"
                },  width: "30%", borderTopRightRadius:"15px", borderEndEndRadius:"15px", background: "#1D3B6A", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Box>
                        <img src={Multiplier} alt='AvialableBalance' width={"40px"} />
                    </Box>

                    <Box>
                        <Typography sx={{ color: "white", fontSize: "20px", fontWeight: 600 }}>Multiplier</Typography>
                    </Box>
                    <Box>

                    </Box>
                </Box>
                <Box sx={{ width: {
                    xs:"100%",
                    md: "70%"
                }, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Box>
                        <StatusCard icon={Amount} heading="Portfolio" value="$100,000" focus />
                    </Box>
                </Box>
            </Box>
        </CardLayout>
    )
}

export default MultiplierCard