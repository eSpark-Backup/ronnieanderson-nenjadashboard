import { Box, Divider, Stack, Typography } from '@mui/material'
import CardLayout from '../CardLayout/CardLayout'
import ComparisionHeader from './ComparisionHeader'
import Team from "../../../assets/team.png";
import Direct from "../../../assets/Directs.png";
import ComparsionStatus from '../ComparsionStatus/ComparsionStatus';


const ComparisonCard = () => {
  return (
    <CardLayout >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }} >
          <ComparisionHeader image={Team} heading={"Team"} />
        </Box>

        <Divider sx={{
          height: "3px",
          my: 1,
        }} />


        <Box sx={{ display: "flex", p: 3 }}>
          <Box sx={{ width: "20%" }}>
          <Stack sx={{gap:"10px"}}>
            <Box sx={{ visibility: "hidden" }}>
              hidden
            </Box>
            <Box sx={{ mt: "15px" }}>
              <Typography sx={{ fontSize: 14, fontWeight: 600, mt: "5px" }}>Left</Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 600, mt: "10px" }}>Right</Typography>
            </Box>
            </Stack>
          </Box>

          <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between" }}>
            <Stack sx={{gap:"10px"}}>
              <ComparisionHeader size="sm" image={Direct} heading='Directs' />
              <ComparsionStatus />
              <ComparsionStatus />
            </Stack>
            <Stack sx={{gap:"10px"}}>
              <ComparisionHeader size="sm" image={Direct} heading='Donwline' />
              <ComparsionStatus />
              <ComparsionStatus />
            </Stack>
          </Box>
        </Box>
      </Box>
    </CardLayout>
  )
}

export default ComparisonCard