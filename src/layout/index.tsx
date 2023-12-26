import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, IconButton, Stack, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { Sidebar } from "./sidebar";

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
    const {  pathname } = useLocation();
    const { breakpoints } = theme;
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const IsLgUp = useMediaQuery(breakpoints.up("lg"));

    const getPrimaryBg = () => {
        //insert the paths where blue color is required
        const paths = ["/team/direct"]
        return paths.includes(pathname)
    }

    return (
        <>
            <Stack
                sx={{
                    display: "flex",
                    flex: "1 1 auto",
                    maxWidth: "100%",
                    width: "100%",
                    alignItems: "flex-end",
                    transition: "0.3s",
                    minHeight: "100vh",
                    paddingLeft: isSidebarOpen ? '280px' : "0px",
                }}
            >
                <LayoutBox>
                    {!IsLgUp && !isSidebarOpen &&
                        <IconButton onClick={() => setSidebarOpen(!isSidebarOpen)} sx={{ position: "absolute", left: "10px", top: "10px" }}>
                            <MenuIcon />
                        </IconButton>}
                    {getPrimaryBg() && <Box sx={{ backgroundColor: "#1D3B6A", position: "absolute", left: "0px", top: "0px", width: "100%", height: "300px", zIndex: -1 }}>
                        {""}
                    </Box>}
                    <Box sx={{
                        padding: "130px 40px 40px",
                        height: "100% !important",
                        overflowY: "scroll",
                        "::-webkit-scrollbar": { width: "0" }
                    }}>

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
