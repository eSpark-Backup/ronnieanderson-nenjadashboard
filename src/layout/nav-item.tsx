import { Button, Collapse, ListItem, Stack } from "@mui/material";
import { Params, useLocation, useNavigate, useParams } from "react-router-dom";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from "react";

export const NavItem = (props: ISidebarItem) => {
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

    console.log(router.pathname.split("/")[1] , href.split("/")[1] )

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

    console.log(active, 'active')

    if (childs) {
        return (
            <>
                <ListItem
                    disableGutters
                    sx={{
                        display: "flex",
                        margin: 0,
                        padding: 0,
                        py: 1,
                    }}
                    {...others}
                >
                    <Button
                        onClick={type === "link" ? () => navigate(href) : type === "logout" ? handleLogout : () => setActiveParent(activeParent === href ? "" : href)}
                        fullWidth
                        sx={{
                            fontWeight: 700,
                            p: 1.5,
                            background: (activeChildParent || active) ? "#E2E2E2" : "",
                            justifyContent: "space-between",
                            lineHeight: 0,
                        }}
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
                    sx={{
                        pl: 3,
                        mt: 0.5,
                    }}
                >
                    {childs.map((item: any) => {
                        return (
                            <Button
                                onClick={() => navigate(item.href)}
                                key={item.href}
                                fullWidth
                                sx={{
                                    fontWeight: 700,
                                    justifyContent: "space-between",
                                    lineHeight: 0,
                                    padding: "24px 16px 24px 9px",
                                    my: 0.2,
                                    background: "transparent",
                                    ml: 0.5,
                                }}
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
            sx={{
                display: "flex",
                margin: 0,
                padding: 0,
                py: 1,
            }}
            {...others}
        >
            <Button
                onClick={() => navigate(href)}
                fullWidth
                sx={{
                    fontWeight: 700,
                    p: 1.5,
                    justifyContent: "space-between",
                    lineHeight: 0,
                }}
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
