import { Grid } from "@mui/material"
import { ComparisonCard, MultiplierCard } from "../../components"
import Referral from "../../components/Referral"
import Tabs from "../../components/Tabs"

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid container item xs={12} gap={2}>
        <Grid item xs={12} md={7}>
          <Referral/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Tabs/>
        </Grid>
      </Grid>
      <Grid item xs={12}>long card</Grid>
      <Grid item xs={12} md={8}><MultiplierCard /></Grid>
      <Grid item xs={12} md={4}><ComparisonCard /></Grid>
      <Grid item xs={12} md={4}><ComparisonCard /></Grid>
      <Grid item xs={12} md={4}><ComparisonCard /></Grid>
      <Grid item xs={12} md={4}>5x Card</Grid>
    </Grid>
  )
}

export default Dashboard