import { useEffect } from "react";
import { Theme as MuiTheme } from "@mui/material/styles";
import {
    Box,
    Drawer,
    useMediaQuery,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../components";
import { NavItem } from "./nav-item";
import { sidebarRoutes } from "../constants";

export const Sidebar = (props: ISidebar) => {
    const navigate = useNavigate()
    const { open, onClose } =
        props;
    const router = useLocation();
    const lgUp = useMediaQuery((theme: MuiTheme) => theme.breakpoints.up("lg"), {
        defaultMatches: true,
        noSsr: false,
    });

    useEffect(() => {
        if (open) {
            onClose?.();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.pathname]);

    const items = () => {
        return (
            <>
                {sidebarRoutes.map((item: ISidebarItem) => {
                    return (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            activeIcon={item.activeIcon}
                            href={item.href}
                            title={item.title}
                            childs={item.childs}
                            type={item.type}
                        />
                    );
                })}
            </>
        );
    };

    const content = (
        <>
            <Box
                className="logged-in-sidebar-wrapper"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <div>
                    <Box
                        sx={{
                            pt: 2,
                            pb: 2.5,
                            px: 3.5,
                            mt: 5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ cursor: "pointer" }} onClick={() => navigate('/dashboard')}>
                            <Logo />
                        </Box>
                    </Box>
                </div>
                <Box sx={{ flexGrow: 1, px: 5 }}>{items()}</Box>
            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        color: "#FFFFFF",
                        width: 280,
                        boxShadow: "none",
                        borderRight: "1px solid #E9EAEC",
                        transition: "0.3s",
                    },
                }}
                variant={"permanent"}
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    color: "#FFFFFF",
                    width: 280,
                },
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};
