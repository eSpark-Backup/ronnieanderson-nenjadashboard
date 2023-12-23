import { Box, Divider, Stack, Typography } from '@mui/material'
import CardLayout from '../CardLayout/CardLayout'
import ComparisionHeader from './ComparisionHeader'
import ComparsionStatus from '../ComparsionStatus/ComparsionStatus';


const ComparisonCard = ({ data }: any) => {
  const {
    Heading,
    HeadingImg,
    SubHeading,
    SubHeadingImg,
    SubHeading2,
    SubHeadingImg2,
  } = data
  return (
    <CardLayout >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }} >
          <ComparisionHeader image={HeadingImg} heading={Heading} />
        </Box>

        <Divider sx={{
          height: "3px",
          my: 1,
        }} />


        <Box sx={{ display: "flex", p: 3 }}>
          <Box sx={{ width: "20%" }}>
            <Stack sx={{ gap: "10px" }}>
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
            <Stack sx={{ gap: "10px" }}>
              <ComparisionHeader size="sm" image={SubHeadingImg} heading={SubHeading} />
              <ComparsionStatus />
              <ComparsionStatus />
            </Stack>
            <Stack sx={{ gap: "10px" }}>
              <ComparisionHeader size="sm" image={SubHeadingImg2} heading={SubHeading2} />
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