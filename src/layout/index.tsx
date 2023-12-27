import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, IconButton, Stack, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { Sidebar } from "./sidebar";
import { styles } from "../utils/styles";

const LayoutBox = styled("div")(({ theme }: any) => ({
    display: "flex",
    position: "relative",
    flex: "1 1 auto",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
    height: "100vh",
    [theme.breakpoints.up("lg")]: {
        width: "calc(100% - 280px)",
    },
}));

const LoggedinLayout = () => {
    const theme = useTheme();
    const { pathname } = useLocation();
    const { breakpoints } = theme;
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const IsLgUp = useMediaQuery(breakpoints.up("lg"));
    const classes = styles.layoutStyles()

    const getPrimaryBg = () => {
        //insert the paths where blue color is required
        const paths = ["/team/direct", '/income/referral', "/income/team-bonus", "/payout", "/profile/account", "/team/new"]
        return paths.includes(pathname)
    }

    return (
        <>
            <Stack className={[classes.mainContainer, isSidebarOpen ? classes.paddingLeft280 : classes.paddingLeft0].join(" ")}>
                <LayoutBox>
                    {!IsLgUp && !isSidebarOpen &&
                        <Box className={classes.menuButton}>
                            <IconButton onClick={() => setSidebarOpen(!isSidebarOpen)} >
                                <MenuIcon />
                            </IconButton>
                        </Box>}
                    {getPrimaryBg() && <Box className={classes.primaryBg}>{""}</Box>}
                    <Box className={classes.scrollLayout}>
                        <Outlet />
                    </Box>
                </LayoutBox>
            </Stack>
            <Sidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}
            />
        </>
    );
};

export default LoggedinLayout;
