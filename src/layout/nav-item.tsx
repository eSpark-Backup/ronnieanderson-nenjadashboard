import { Button, Collapse, ListItem, Stack } from "@mui/material";
import { Params, useLocation, useNavigate, useParams } from "react-router-dom";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from "react";
import { styles } from "../utils/styles";

export const NavItem = (props: ISidebarItem) => {
    const classes = styles.sidebarStyles()
    const { href, icon, activeIcon, title, type, childs, ...others } = props;
    const router = useLocation();
    const navigate = useNavigate();
    const { id }: Readonly<Params<string>> = useParams();
    const [active, setActive] = useState<Boolean>(false)
    const [activeParent, setActiveParent] = useState<string>("")
    const [activeChildParent, setActiveChildParent] = useState(false)

    const handleLogout = () => {
        navigate("/sign-in")
    }

    useEffect(() => {
        setActive(href
            ? router.pathname.split("/")[1] === href.split("/")[1] ||
            router.pathname === `${href}/${id}`
            : false)
    }, [href, router, id])

    useEffect(() => {
        const activeChildParent = activeParent.replace("/", "") === href.split("/")[1];
        setActiveChildParent(activeChildParent)
    }, [activeParent, href])

    if (childs) {
        return (
            <>
                <ListItem
                    disableGutters
                    className={classes.navListing}
                    {...others}
                >
                    <Button
                        onClick={type === "link" ? () => navigate(href) : type === "logout" ? handleLogout : () => setActiveParent(activeParent === href ? "" : href)}
                        fullWidth
                        className={[classes.parentTabs1, activeChildParent ? classes.grey : classes.transparent].join(" ")}
                        disableRipple
                        endIcon={
                            activeChildParent ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                        }
                    >
                        <Stack direction={"row"} alignItems={"center"} gap={1}>
                            <img
                                src={activeChildParent ? activeIcon : icon}
                                alt=""
                                width="20px"
                            />
                            {title}
                        </Stack>
                    </Button>
                </ListItem >
                <Collapse
                    in={activeChildParent}
                    timeout="auto"
                    unmountOnExit
                    className={classes.collapse}
                >
                    {childs.map((item: any) => {
                        return (
                            <Button
                                onClick={() => navigate(item.href)}
                                key={item.href}
                                fullWidth
                                className={[classes.childTabs, router.pathname === item.href ? classes.grey : classes.transparent].join(" ")}
                                disableRipple
                            >
                                {item.title}
                            </Button>
                        );
                    })}
                </Collapse>
            </>
        );
    }

    return (
        <ListItem
            disableGutters
            className={classes.navListing}
            {...others}
        >
            <Button
                onClick={() => navigate(href)}
                fullWidth
                className={[classes.parentTabs2, (activeChildParent || active) ? classes.grey : classes.transparent].join(" ")}
                disableRipple
            >
                <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <img src={active ? activeIcon : icon} alt="" width="20px" />
                    {title}
                </Stack>
            </Button>
        </ListItem>
    );
};
