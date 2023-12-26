import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker as MUIDateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function DateRangePicker() {
    return (
        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ height: "100%", padding: "7px 10px", border: "1px solid #707070", borderRadius: "5px" }}>
            <CalendarMonthIcon color="primary" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MUIDateRangePicker
                    sx={{
                        width: "100%",
                        input: { padding: "0px" }
                    }}
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
