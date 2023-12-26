import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker as MUIDateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { styles } from "../../utils/styles";

export default function DateRangePicker() {
    const classes = styles.dateRangePickerStyles()
    return (
        <Stack direction="row" alignItems="center" justifyContent="center" className={classes.container}>
            <CalendarMonthIcon color="primary" />
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
            <FilterAltIcon color="primary" />
        </Stack>
    );
}
