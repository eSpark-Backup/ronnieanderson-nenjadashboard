import { makeStyles } from '@mui/styles';
import { packageBg } from '../assets';

const tableStyle = makeStyles({
    evenRow: {
        background: "#F7FAFC"
    },
    statusDot: {
        width: "7px",
        height: "7px",
        borderRadius: "50%"
    },
    activeDot: {
        backgroundColor: "#8DC63F"
    },
    inActiveDot: {
        backgroundColor: "#F53C56"
    },
    fullWidth: {
        width: "100%"
    },
    muiTableWidth: {
        minWidth: 650
    },
    rounded: {
        borderRadius: "50%"
    },
    objectNone: {
        objectFit: "none"
    },
    objectContain: {
        objectFit: "contain"
    },
    rewardAmount: {
        width: "150px",
        height: "60px",
        lineHeight: "60px !important",
        textAlign: "center",
        color: "#fff !important",
        fontSize: "25px !important",
        fontWeight: "600 !important",
        backgroundColor: "#8DC63F",
        borderRadius: "11px"
    },
    opacity: {
        opacity: 1
    },
    noOpacity: {
        opacity: 0.3
    },
    paddingLeft5: {
        paddingLeft: "40px !important",
    },
    paddingLeft2: {
        paddingLeft: "16px",
    },
});

const packageStyle = makeStyles({
    packageCard: {
        background: `url(${packageBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
        borderRadius: "20px",
        padding: "30px",
        '@media (min-width: 1000px)': {
            backgroundSize: '103%',
        },
    },
    packageSelect: {
        minWidth: "200px",
        backgroundColor: "#FFF",
        borderRadius: "10px !important",
        "& div": { color: "#1D3B6A", fontSize: "27px", fontWeight: 600, display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "10px" },
        "& svg": { color: "#1D3B6A", fontSize: "30px" }
    },
    dailyCapping: {
        backgroundColor: "#FFF",
        borderRadius: "10px"
    },
    dailyCappingCount: {
        backgroundColor: "#51C9F4",
        padding: "20px 40px 20px 20px",
        borderRadius: "0 10px 10px 0"
    },
})


const payOutScreenStyles = makeStyles({
    root: {
        paddingLeft: "40px",
        paddingRight: "40px",
        minHeight: "80vh"
    },

    button: {
        backgroundColor: "#7C7F84",
        borderRadius: "5px 0px 0px 5px",
        height: "50px",
        minWidth: "250px",
        maxWidth: "260px",
        fontWeight: "300",
    },
    button2: {
        height: "50px",
        width: "150px",
        fontWeight: "300",
        marginLeft: "10px"
    },
    button3: {
        height: "50px",
        width: "150px",
        fontWeight: "300",
        marginRight: "15px"
    },
    padding0: {
        paddingLeft: "0px"
    },
    padding60: {
        paddingLeft: "60px"
    },
    textRight: {
        textAlign: "right"
    },

    balanceCardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "column",
        gap: "50px"
    },

    balanceCard: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        marginBottom: '20px',
        width: '200px',
    },

    balanceCardHeadingBox: {
        marginLeft: '10px',
    },
    balacneCardTitle: {
        fontSize: '14px',
    },

    balacneCardValue: {
        fontSize: '20px !important',
        fontWeight: 'bolder !important',
        color: "#1D3B6A !important",

    },
    balanceInputsContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px"
    },
    inputGroupButton: {
        backgroundColor: "#7C7F84",
        borderRadius: "5px 0px 0px 5px"
    },
    inputGroupTextfield1: {
        borderTopLeftRadius: "0px !important",
        borderBottomLeftRadius: "0px !important",
        borderTopRightRadius: "none",
        borderBottomRightRadius: "none",
        width: "50%",
        textAlign: "right",
        height: "50px",
        border: "1px solid #D7D7D7",
        color: "#000000 !important",
        fontWeight: "bolder !important",
        fontSize: "20px !important"
    },
    inputGroupTextfield2: {
        borderTopLeftRadius: '0px !important',
        borderBottomLeftRadius: '0px !important',
        borderTopRightRadius: 'none',
        borderBottomRightRadius: 'none',
        width: '51%',
        height: "50px",
        border: "1px solid #D7D7D7",
        color: "#000000 !important",
        fontWeight: "bolder !important",
        fontSize: "20px !important"
    },

    inputGroupTypeOne: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    inputGroupTypeTwo: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },
    inputGroupTypeTwoChild: {
        width: "66%",
        marginRight: "8px",
        display: "flex",
        flexDirection: "row"
    },
    balanceCardFooter: {
        width: "70%",
        display: "flex",
        justifyContent: "flex-end"
    },
    icon: {
        marginLeft: "5px",
        fontSize: "16px !important",
        color: "#7C7F84"
    },
    '@media (max-width:1200px)': {
        inputGroupTypeTwoChild: {
            width: "100%",
        },
        inputGroupTypeTwo: {
            justifyContent: "center"
        },
        balanceCardFooter: {
            justifyContent: "center"
        }
    },
    '@media (max-width: 1000px)': {
        root: {
            paddingLeft: "8px",
            paddingRight: "8px",
        },
    },
    '@media (max-width: 700px)': {
        button: {
            width: "100%",
            maxWidth: "none",
            paddingLeft: "0px",
        },
        button2: {
            width: "100%",
            maxWidth: "none",
            paddingLeft: "0px",
            marginLeft: "0px"
        },
        button3: {
            width: "100%",
            maxWidth: "none",
            paddingLeft: "0px",
            marginLeft: "0px"
        },
        inputGroupTypeOne: {
            flexDirection: "column",
            rowGap: "20px !important"
        },
        inputGroupTextfield1: {
            width: "100%",
            fontSize: "14px !important"
        },
        inputGroupTypeTwo: {
            justifyContent: "flex-start",
            rowGap: "20px !important"
        },
        inputGroupTypeTwoChild: {
            justifyContent: "flex-start",
            flexDirection: "column",
            width: "100%",
            rowGap: "20px !important"
        },
        inputGroupTextfield2: {
            width: "100%",
            fontSize: "14px !important"
        },
        balanceCardFooter: {
            width: "100%",
            justifyContent: "flex-start"
        }
    }

});

const dateRangePickerStyles = makeStyles({
    container: {
        height: "100%",
        padding: "7px 10px",
        border: "1px solid #707070",
        borderRadius: "5px"
    },
    datepicker: {
        width: "100%",
        "& input": { padding: "0px" }
    }
});

const customButtonStyles = makeStyles({
    root: {
        width: "100%",
        borderRadius: "10px"
    }
});

const cardStyles = makeStyles({
    cardLayout: {
        paddingTop: "8px",
        paddingBottom: "8px",
        borderRadius: "15px",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    limitCardContainer: {
        width: "100%",
        height: "220px",
        backgroundColor: "lightgrey",
        borderRadius: "15px",
        position: "relative"
    },
    limitCardImg: {
        position: "absolute",
        right: 20,
        top: 0
    },
    limitCardProgress: {
        height: "80px",
        width: "120px",
        position: "absolute",
        top: 60,
        left: 30
    },
    limitCardLimit: {
        position: 'absolute',
        right: 10,
        bottom: 30,
        fontWeight: "400"
    },
    limitCardCount: {
        width: "120px",
        height: "30px",
        backgroundColor: "#51C9F4",
        position: 'absolute',
        right: 0,
        bottom: 10,
        borderTopLeftRadius: "18px",
        borderBottomLeftRadius: "18px",
        display: "flex", justifyContent: "center", alignItems: "center",
        color: "white"
    },
    multiCardContainer: {
        padding: 0,
        height: "100%"
    },
    multiCardFlex: {
        display: "flex",
        minHeight: "100%"
    },
    multiCardInnerBox: {
        display: "flex",
        width: "30%",
        borderTopRightRadius: "15px",
        borderEndEndRadius: "15px",
        background: "#1D3B6A",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"

    },
    multiCardContainer2: {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    multiCardInnerBox2: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    },
    multiCardInnerBox3: {
        display: "flex",
        gap: "5px",
        minWidth: "170px"
    },
    divider: {
        height: "3px",
        marginTop: "8px",
        marginBottom: "8px",
    },
    detailCardContainer: {
        padding: "40px"
    },
    detailCardImageContainer: {
        padding: "24px",
        background: "#D5F8E9",
        borderRadius: "15px",
        height: "85%"
    },
    flex: {
        display: "flex"
    },
    detailCardTimerContainer: {
        background: "#1D3B6A",
        padding: "16px",
        borderRadius: "15px"
    },
    detailCardTimerText: {
        width: "50px",
        background: "#8DC63F",
        padding: "8px",
        borderRadius: "10px"
    },
    detailCardChip: {
        background: "#8DC63F",
        paddingRight: "16px",
        paddingLeft: "16px",
        borderRadius: "17px"
    },
    detailCardProgress: {
        background: "#E2E2E2",
        borderRadius: "100px",
        padding: "4px 24px",
        position: "relative"
    },
    detailCardProgressFill: {
        padding: "4px",
        textAlign: "center",
        position: "absolute",
        top: "0px",
        left: "0px",
        background: "#8DC63F",
        justifyContent: "center",
        alignItems: "center"
    },
    borderRadiusFull: {
        borderRadius: "100px"
    },
    borderRadiusHalf: {
        borderRadius: "100px 0 0 100px"
    },
    none: {
        display: "none"
    },
    detailCardRadialProgress: (props: { radialPerc?: number }) => ({
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#8DC63F ${props.radialPerc}%, #E2E2E2 0)`
    }),
    detailCardSpan: {
        color: "#8DC63F",
        fontWeight: 500
    },
    '@media (max-width:1000px)': {
        multiCardInnerBox: {
            display: "none",
        },
        multiCardContainer2: {
            width: "100%",
        },
        detailCardContainer: {
            padding: "8px"
        },
    },
});

const inputStyles = makeStyles({
    container: {
        width: "100%",
    },
    customInput: {
        width: "100%",
        borderRadius: "5px"
    },
    img: {
        objectFit: "contain"
    }
});

const referralStyles = makeStyles({
    buttons: {
        backgroundColor: "#AFB1AE",
        height: "40px",
        fontSize: "15px",
        width: "150px"
    },
    tabsLayout: {
        width: "100%",
        minHeight: "40px"
    },
    layout: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        minHeight: "40px",
        flexWrap: "wrap"
    }
})

const authStyles = makeStyles({
    mainContainer: {
        width: "620px",
        border: "1px solid #1D3B6A",
        borderRadius: "20px"
    },
    innerBox: {
        padding: "78px"
    },
    form: {
        width: "100%",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "column"
    },
    buttons: {
        height: "50px"
    },
    forgotPasswordButton: {
        width: "max-content"
    },
    signInButton: {
        width: "200px",
        marginTop: "40px !important",
        height: "50px"
    },
    signInInputs: {
        marginTop: "8px !important",
        marginBottom: "8px !important"
    },
    divider: {
        margin: "0 10px"
    },
    icon: {
        color: '#E2E2E2'
    },
    '@media (max-width:1000px)': {
        mainContainer: {
            width: "100%",
            border: "0px",
        },
        innerBox: {
            padding: "30px"
        }
    },
})

const layoutStyles = makeStyles({
    mainContainer: {
        display: "flex",
        flex: "1 1 auto",
        maxWidth: "100%",
        width: "100%",
        alignItems: "flex-end",
        transition: "0.3s",
        minHeight: "100vh",
    },
    paddingLeft0: {
        paddingLeft: "0px"
    },
    paddingLeft280: {
        paddingLeft: "280px"
    },
    menuButton: {
        position: "absolute",
        left: "10px !important",
        top: "10px !important"
    },
    primaryBg: {
        backgroundColor: "#1D3B6A",
        position: "absolute",
        left: "0px",
        top: "0px",
        width: "100%",
        height: "300px",
        zIndex: -1
    },
    scrollLayout: {
        padding: "130px 40px 40px",
        height: "100% !important",
        overflowY: "scroll",
        "&::-webkit-scrollbar": { width: "0" }
    }
})

const sidebarStyles = makeStyles({
    logoContainer: {
        padding: "16px 28px 28px 20px",
        marginTop: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    logoWrapper: {
        cursor: "pointer"
    },
    listing: {
        flexGrow: 1,
        paddingLeft: "40px",
        paddingRight: "40px",
    },
    upDrawerPaper: {
        color: "#FFFFFF",
        width: 280,
        boxShadow: "none",
        borderRight: "1px solid #E9EAEC",
        transition: "0.3s",
        "&::-webkit-scrollbar": { width: "0" }
    },
    drawerPaper: {
        color: "#FFFFFF",
        width: 280,
    },
    navListing: {
        display: "flex",
        margin: "0px",
        padding: "8px 0px !important",
    },
    parentTabs1: {
        fontWeight: "700 !important",
        justifyContent: "space-between !important",
        lineHeight: "0 !important",
    },
    parentTabs2: {
        fontWeight: "700 !important",
        justifyContent: "space-between !important",
        lineHeight: "0 !important",
    },
    childTabs: {
        fontWeight: "700 !important",
        justifyContent: "space-between !important",
        lineHeight: "0 !important",
        padding: "24px 16px 24px 9px !important",
        marginTop: "2px !important",
        marginBottom: "2px !important",
        marginLeft: "4px !important",
    },
    collapse: {
        paddingLeft: "24px",
        marginTop: "4px",
    },
    grey: {
        backgroundColor: "#E2E2E2 !important"
    },
    transparent: {
        backgroundColor: "transparent"
    }
})


export const profileMainStyles = makeStyles({
    ProfileMainContainer: {
        display: 'flex',
    },
    profileName: {
        fontSize: 20,
        fontWeight: 600,
    },
    profileSectionContainer: {
        backgroundColor: '#F9F9F9',
        height: "100%",
        paddingTop: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "10px"

    },
    diamondHeading: {
        fontSize: 16,
    },
    buttons: {
        width: "150px",
        height: "50px"
    },
    updatePwButton: {
        width: "200px",
        height: "50px"
    },
    faButton: {
        width: "90%",
        height: "70px"
    },
    profileConatiner: {
        padding: "20px 20px 20px 20px",
    },
    profileFooter: {
        display: "flex",
        marginTop: "50px",
        justifyContent: "flex-end",
        gap: "4px",
        flexWrap: "wrap"
    },
    securityFooterParent: {
        display: "flex"
    },
    securityFooterChild: {
        display: "flex",
        columnGap: "4px",
        backgroundColor: "#F9F9F9",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px 0px 10px 0px",
        gap: "3px",
        borderRadius: "20px",
        marginTop: "8px"
    },
    securityFooterImage: {
        width: "90%"
    },
    securityHeading: {
        fontSize: "25px !important",
        color: "#1D3B6A !important",
        fontWeight: "bold !important"
    },
    userName: {
        fontSize: "30px !important",
        fontWeight: "bolder !important",
        color: "#1D3B6A !important"
    },
    userRank1: {
        textAlign: "center",
        color: "#1D3B6A !important",
        fontWeight: "300 !important"
    },
    userRank2: {
        textAlign: "center",
        color: "#1D3B6A !important",
        fontWeight: "bold !important",
        fontSize: "30px !important"
    },
    profileBox: {
        position: "relative"
    },
    imageIcon: {
        position: "absolute",
        bottom: "5px",
        right: "-6px",
        cursor: "pointer"
    },
    '@media (max-width:550px)': {
        profileFooter: {
            justifyContent: "center"
        },
        securityFooterParent: {
            justifyContent: "center"
        },
        profileConatiner: {
            padding: "20px 0px 20px 0px",
        }
    },
})

const newStyles = makeStyles({
    container: {
        padding: "20px 20px 20px 40px"
    },
    tabsButton: {
        width: "25%"
    },
    createButton: {
        width: "200px",
        marginTop: "20px",
        height: "55px"
    },
    mainHeading: {
        color: "#1D3B6A !important",
        fontSize: "25px !important",
        fontWeight: "600 !important"
    },
    buttonBox: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "40px"
    },
    checkBox: {
        marginTop: "55px"
    },
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    '@media (max-width:1000px)': {
        buttonBox: {
            marginTop: "15px"
        }
    },
})

const rankRewardStyles = makeStyles({
    checkBox: {
        "& svg": {
            color: "#8DC63F !important"
        }
    },
    progress: {
        background: "#E2E2E2",
        borderRadius: "100px",
        padding: "4px 24px",
        position: "relative"
    },
    progressFill: {
        padding: "4px",
        textAlign: "center",
        position: "absolute",
        top: "0px",
        left: "0px",
        background: "#8DC63F",
        justifyContent: "center",
        alignItems: "center"
    },
    borderRadiusFull: {
        borderRadius: "100px"
    },
    borderRadiusHalf: {
        borderRadius: "100px 0 0 100px"
    },
    flex: {
        display: "flex"
    },
    none: {
        display: "none"
    },
    opacity: {
        opacity: 1
    },
    noOpacity: {
        opacity: 0.3
    },
})

export const styles = {
    tableStyle,
    packageStyle,
    payOutScreenStyles,
    profileMainStyles,
    newStyles,
    dateRangePickerStyles,
    customButtonStyles,
    cardStyles,
    inputStyles,
    referralStyles,
    authStyles,
    layoutStyles,
    sidebarStyles,
    rankRewardStyles,
}

