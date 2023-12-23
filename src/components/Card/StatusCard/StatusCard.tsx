import { Box, Typography } from "@mui/material"

const StatusCard = ( props : IStatusCard) => {
  const { icon, heading, value, focus, extraInfo, notIcon } = props
  return (
    <Box sx={{ display: "flex", gap: "5px", minWidth: "170px" }}>
      <Box >
        {notIcon ? <Box sx={{width: "40px"}}>{icon}</Box> : <img src={icon} alt="amount" width={"40px"} />}
      </Box>
      <Box>
        <Typography sx={{ fontSize: "12px", }}>{heading}</Typography>
        <Typography sx={{ color: "black", fontSize: focus ? "30px" : "20px", fontWeight: 600 }}>{value}</Typography>
        {extraInfo}
      </Box>
    </Box>
  )
}

export default StatusCard