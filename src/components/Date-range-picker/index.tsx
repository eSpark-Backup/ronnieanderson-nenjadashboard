import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker as MUIDateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { styles } from "../../utils/styles";
import { calendar, filter } from "../../assets";

export default function DateRangePicker() {
    const classes = styles.dateRangePickerStyles()
    return (
        <Stack direction="row" alignItems="center" justifyContent="center" className={classes.container}>
            <img src={calendar} width={20} height={20} alt="calendar" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MUIDateRangePicker
                    className={classes.datepicker}
                    slots={{ field: SingleInputDateRangeField }}
                    format="DD/MM/YYYY"
                    onChange={(newValue: any) => {
                        console.log(newValue, "newValue");
                    }}
                />
            </LocalizationProvider>
            <img src={filter} width={20} height={20} alt="filter" />
        </Stack>
    );
}
