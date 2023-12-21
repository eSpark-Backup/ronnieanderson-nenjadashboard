import { FormControl } from "@mui/base";
import { InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface IProps {
  required?: boolean;
  label: string;
  placeholder: string;
  type: string;
  options?: any[];
}

const CustomInput = ({ required, label, placeholder, type, options }: IProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography mb={1} textAlign="left">
        {label}
        {required ? "*" : ""}
      </Typography>

      {type !== "select" ? (
        <TextField
          type={type}
          sx={{ width: "100%", borderRadius: "5px" }}
          placeholder={placeholder}
        />
      ) : (
        <FormControl>
          <Select
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            label={label}
            placeholder={placeholder}
            sx={{ width: "100%", borderRadius: "5px" }}
          >
            {options?.map((eachOption: any, index: number) => (
              <MenuItem key={index} value={eachOption?.value}>
                {eachOption?.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
};

export default CustomInput;
