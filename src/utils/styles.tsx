import { makeStyles } from '@mui/styles';

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
});

const packageStyle = makeStyles({
    packageCard: {
        background: "#000",
        borderRadius: "20px",
        padding: "30px"
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
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
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
    '@media (max-width: 700px)': {
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

const profileMainStyles = makeStyles({
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

const newTeamStyles = makeStyles({
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
        buttonBox:{
            marginTop: "15px"
        }
    },
})




export const styles = {
    tableStyle,
    packageStyle,
    payOutScreenStyles,
    profileMainStyles,
    newTeamStyles
}

