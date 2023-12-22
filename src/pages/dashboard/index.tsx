import { Box, Grid } from "@mui/material"
import { ComparisonCard, DetailCard, MultiplierCard } from "../../components"
import Referral from "../../components/Referral"
import Tabs from "../../components/Tabs"
import limitCardbg from "../../assets/5x-bg.png"
import { ActiveInacitveData, BussinsessData, TeamData } from "../../constants"


const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12} md={7}>
          <Referral />
        </Grid>
        <Grid item xs={12} md={5} >
          <Tabs />
        </Grid>
      </Grid>
      <Grid item xs={12}><DetailCard /></Grid>
      <Grid item xs={12} lg={8}><MultiplierCard /></Grid>
      <Grid item xs={12} md={6} lg={4}><ComparisonCard data={BussinsessData}  /></Grid>
      <Grid item xs={12} md={6} lg={4}><ComparisonCard data={TeamData}  /></Grid>
      <Grid item xs={12} md={6} lg={4}><ComparisonCard data={ActiveInacitveData}  /></Grid>
      <Grid item xs={12} md={6} lg={4}>
        {/* <Box
        sx={{
          backgroundImage: `url(${limitCardbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}>

        </Box> */}
        <Box>
        <img src={limitCardbg} alt="limitCardbg" width="100%" height="100%" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Dashboard