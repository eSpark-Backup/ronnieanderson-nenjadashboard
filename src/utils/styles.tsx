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

export const styles = {
    tableStyle,
    packageStyle,
}

