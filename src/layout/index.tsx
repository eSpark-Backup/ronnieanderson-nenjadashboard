import { useState } from "react";
import { Outlet } from "react-router-dom";
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
    const { breakpoints } = theme;
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const IsLgUp = useMediaQuery(breakpoints.up("lg"));

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
