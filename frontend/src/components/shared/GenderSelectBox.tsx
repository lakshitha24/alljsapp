import { Employe } from "../../types/Employe.type";
import { Control,Controller } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
type SelectBoxProps = {
  control: Control<Employe> | undefined;
  error?: string;
};

const GenderSelectBox = ({ control, error }: SelectBoxProps) => {
  return (
    <div className="form-control">
        <small className="label-padding-with-font-size">Gender</small>
      <FormControl fullWidth error={Boolean(error)}>
        <InputLabel id="demo-simple-select-error-label">Gender</InputLabel>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              label="Gender"
              renderValue={(value) => ` ${value === 'M' ? 'Male' : 'Female'}`}
            >
              <MenuItem value={'M'}>Male</MenuItem>
              <MenuItem value={'F'}>Female</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <FormHelperText className="text-danger">{error}</FormHelperText>
    </div>
  );
};

export default GenderSelectBox;
