import { Box, Typography } from "@mui/material"
import Amount from "../../../assets/Amount.png"

const StatusCard = () => {
  return (
    <Box sx={{display:"flex", gap:"5px"}}>
     <Box >
        <img src={Amount} alt="amount" width={"40px"} />
     </Box>
     <Box>
     <Typography sx={{ fontSize: "12px", }}>Portfolio</Typography>
     <Typography sx={{color:"black", fontSize: "30px", fontWeight:600  }}>$100,000</Typography>
     </Box>
    </Box>
  )
}

export default StatusCard