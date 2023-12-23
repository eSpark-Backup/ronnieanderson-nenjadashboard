import { Grid } from "@mui/material"
import { ComparisonCard, DetailCard, LimitCard, MultiplierCard } from "../../components"
import Referral from "../../components/Referral"
import Tabs from "../../components/Tabs"
import { ActiveInacitveData, BussinsessData, TeamData } from "../../constants"


const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12} md={8}>
          <Referral />
        </Grid>
        <Grid item xs={12} md={4} >
          <Tabs />
        </Grid>
      </Grid>
      <Grid item xs={12}><DetailCard /></Grid>
      <Grid item xs={12} lg={8}><MultiplierCard /></Grid>
      <Grid item xs={12} md={6} lg={4}><ComparisonCard data={BussinsessData} /></Grid>
      <Grid item xs={12} md={6} lg={4}><ComparisonCard data={TeamData} /></Grid>
      <Grid item xs={12} md={6} lg={4}><ComparisonCard data={ActiveInacitveData} /></Grid>
      <Grid item xs={12} md={6} lg={4}><LimitCard /></Grid>
    </Grid>
  )
}

export default Dashboard