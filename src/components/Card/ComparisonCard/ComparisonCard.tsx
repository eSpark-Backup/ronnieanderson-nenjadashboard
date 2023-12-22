import { Box, Divider, Typography } from '@mui/material'
import CardLayout from '../CardLayout/CardLayout'
import ComparisionHeader from './ComparisionHeader'
import Team from "../../../assets/team.png";
import Direct from "../../../assets/Directs.png";
import ComparsionStatus from '../ComparsionStatus/ComparsionStatus';


const ComparisonCard = () => {
  return (
    <CardLayout sx={{ maxWidth: "345px" }}>
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
            <Box sx={{ visibility: "hidden" }}>
              hidden
            </Box>
            <Box sx={{ mt: "18px" }}>
              <Typography sx={{ fontSize: 14, fontWeight: 600, mt: "5px" }}>Left</Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 600, mt: "5px" }}>Right</Typography>
            </Box>
          </Box>

          <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between" }}>
            <Box>
              <ComparisionHeader size="sm" image={Direct} heading='Directs' />
              <ComparsionStatus />
              <ComparsionStatus />
            </Box>
            <Box>
              <ComparisionHeader size="sm" image={Direct} heading='Donwline' />
              <ComparsionStatus />
              <ComparsionStatus />
            </Box>
          </Box>
        </Box>
      </Box>
    </CardLayout>
  )
}

export default ComparisonCard