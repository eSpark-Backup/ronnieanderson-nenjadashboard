import CardLayout from '../CardLayout/CardLayout'
import { Grid, Typography, Box, useMediaQuery, Stack } from '@mui/material'
import { Theme as MuiTheme } from "@mui/material/styles";
import StatusCard from '../StatusCard/StatusCard'
import { DailyProfit, diamond, diamond2, totalEarning, AvailableBalance } from '../../../assets';

const DetailCard = () => {
    const isSm = useMediaQuery((theme: MuiTheme) => theme.breakpoints.up("sm"));
    const counts = 200;
    const totalCounts = 1000
    const percentage = (counts / totalCounts) * 100;
    const radialPerc = 70

    const status: IStatusCard[] = [
        {
            icon: totalEarning,
            heading: "Total Earnings",
            value: "$10,000",
            focus: true,
            extraInfo: <Typography><span style={{ color: "#8DC63F", fontWeight: 500 }}>+$64</span> This week</Typography>
        },
        {
            icon: DailyProfit,
            heading: "Daily Profit",
            value: "$8,000",
            focus: false,
        },
        {
            icon: AvailableBalance,
            heading: "Available Balance",
            value: "$15,000",
            focus: false,
        },
        {
            icon:
                <Stack justifyContent="center" alignItems="center" sx={{ width: "42px", height: "42px", borderRadius: "50%", background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#8DC63F ${radialPerc}%, #E2E2E2 0)` }}>
                    <Stack justifyContent="center" alignItems="center">
                        <Typography lineHeight="8px" fontSize="12px" fontWeight={600}>15</Typography>
                        <Typography fontSize="8px">Days</Typography>
                    </Stack>
                </Stack>,
            heading: "Fast Start",
            value: "$5,000",
            focus: false,
            notIcon: true,
        },
    ]

    return (
        <CardLayout sx={{ p: { xs: 1, md: 5 } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3.5}>
                    <Stack alignItems="center" justifyContent="center" sx={{ p: 3, background: "#D5F8E9", borderRadius: "15px", height: "85%" }}>
                        <img src={diamond} width={!isSm ? "100px" : "176px"} height={!isSm ? "100px" : "176px"} alt="diamond" />
                        <Typography variant='body1'>Rank:</Typography>
                        <Typography color="#000" variant='h5'>Emerald</Typography>
                    </Stack>
                </Grid>
                <Grid py={5} sx={{ display: "flex" }} alignItems="center" container item xs={12} md={5} spacing={2}>
                    {status.map((item: IStatusCard, index: number) => {
                        return <Grid key={index} sx={{ display: "flex" }} alignItems="flex-start" justifyContent="center" item xs={12} sm={6}><StatusCard {...item} /></Grid>
                    })}
                </Grid>
                <Grid item xs={12} md={3.5}>
                    <Stack>
                        <Stack sx={{ background: "#1D3B6A", p: 2, borderRadius: "15px" }}>
                            <Stack flexWrap="wrap" direction="row" alignItems="flex-start" justifyContent="center" gap="10px">
                                {Object.entries({ days: 29, hours: 15, minutes: 59 }).map(([key, value]) => (
                                    <Stack alignItems="center" key={key}>
                                        <Box sx={{ width: "50px", background: "#8DC63F", p: 1, borderRadius: "10px" }}>
                                            <Typography textAlign="center" variant='h5' color="#fff">{value}</Typography>
                                        </Box>
                                        <Typography fontWeight={300} fontSize="14px" mt={1} color="#fff">{key.toUpperCase()}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                            <Stack gap={2} flexWrap="wrap" mt={3} direction="row" alignItems="center" justifyContent="space-between">
                                <Stack >
                                    <Typography fontWeight={300} fontSize="14px" color="#fff">Status:</Typography>
                                    <Box sx={{ background: "#8DC63F", px: 2, borderRadius: "17px" }}><Typography fontWeight={300} fontSize="14px" color="#fff">Active</Typography></Box>
                                </Stack>
                                <Stack >
                                    <Typography fontWeight={300} fontSize="14px" color="#fff">Daily Capping</Typography>
                                    <Typography fontWeight={600} color="#fff">$10,000</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack mt={3}>
                            <Stack flexWrap="wrap" direction="row" alignItems="center" justifyContent="flex-start" gap={2}>
                                <img src={diamond2} width="100px" height="80px" alt="diamond2" />
                                <Stack>
                                    <Typography color="#000" variant="body1">Next Rank:</Typography>
                                    <Typography color="#000" variant="h6">Diamond</Typography>
                                </Stack>
                            </Stack>
                            <Stack mt={2} direction="row" alignItems="center" justifyContent="flex-end" sx={{ background: "#E2E2E2", borderRadius: "100px", py: 0.5, px: 3, position: "relative" }}>
                                <Typography fontSize="12px" color="#fff">{totalCounts}</Typography>
                                <Box sx={{ display: counts >= 1 ? "block" : "none", padding: "4px", textAlign: "center", borderRadius: counts > totalCounts - 5 ? "100px" : "100px 0 0 100px", position: "absolute", top: "0px", left: "0px", background: "#8DC63F", width: `${percentage}%` }}><Typography fontSize="12px" color="#fff">{counts}</Typography></Box>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </CardLayout >
    )
}

export default DetailCard