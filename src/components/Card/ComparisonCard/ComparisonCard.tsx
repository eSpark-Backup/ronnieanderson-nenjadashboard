import { Box, Divider, Stack, Typography } from '@mui/material'
import CardLayout from '../CardLayout/CardLayout'
import ComparisionHeader from './ComparisionHeader'
import ComparsionStatus from '../ComparsionStatus/ComparsionStatus';
import { styles } from '../../../utils/styles';


const ComparisonCard = ({ data }: any) => {
  const classes = styles.cardStyles({})
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
        <Stack direction="row" justifyContent="center" >
          <ComparisionHeader image={HeadingImg} heading={Heading} />
        </Stack>
        <Divider className={classes.divider} />
        <Stack direction="row" p={3}>
          <Box width="20%">
            <Stack gap="10px">
              <Box visibility="hidden">
                hidden
              </Box>
              <Box mt="15px">
                <Typography fontSize={14} fontWeight={600} mt="5px">Left</Typography>
                <Typography fontSize={14} fontWeight={600} mt="10px">Right</Typography>
              </Box>
            </Stack>
          </Box>

          <Stack direction="row" justifyContent="space-between" width='80%'>
            <Stack gap="10px">
              <ComparisionHeader size="sm" image={SubHeadingImg} heading={SubHeading} />
              <ComparsionStatus />
              <ComparsionStatus />
            </Stack>
            <Stack gap="10px">
              <ComparisionHeader size="sm" image={SubHeadingImg2} heading={SubHeading2} />
              <ComparsionStatus />
              <ComparsionStatus />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </CardLayout>
  )
}

export default ComparisonCard