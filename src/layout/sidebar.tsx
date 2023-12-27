import { useEffect } from "react";
import { Theme as MuiTheme } from "@mui/material/styles";
import {
    Box,
    Drawer,
    Stack,
    useMediaQuery,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../components";
import { NavItem } from "./nav-item";
import { sidebarRoutes } from "../constants";
import { styles } from "../utils/styles";

export const Sidebar = (props: ISidebar) => {
    const classes = styles.sidebarStyles()
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
            <Stack height="100%">
                <div>
                    <Box className={classes.logoContainer}>
                        <Box className={classes.logoWrapper} onClick={() => navigate('/dashboard')}>
                            <Logo />
                        </Box>
                    </Box>
                </div>
                <Box className={classes.listing}>{items()}</Box>
            </Stack>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    className: classes.upDrawerPaper
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
                className: classes.drawerPaper
            }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};
