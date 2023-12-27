import { Stack, Box, Typography } from "@mui/material"

const StatusCard = (props: IStatusCard) => {
  const { icon, heading, value, focus, extraInfo, notIcon } = props
  return (
    <Stack direction="row" gap="5px" minWidth="170px">
      <Box >
        {notIcon ? <Box width="40px">{icon}</Box> : <img src={icon} alt="amount" width={"40px"} />}
      </Box>
      <Box>
        <Typography fontSize="12px">{heading}</Typography>
        <Typography color="#000" fontWeight={600} fontSize={focus ? "30px" : "20px"}>{value}</Typography>
        {extraInfo}
      </Box>
    </Stack>
  )
}

export default StatusCard