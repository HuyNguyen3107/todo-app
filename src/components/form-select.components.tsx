"use client";
import { Controller } from "react-hook-form";
import type { Control, RegisterOptions } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import type { SelectProps } from "@mui/material/Select";

type OptionType = {
  value: string | number;
  label: string;
};

type FormSelectProps = Omit<SelectProps, "value" | "onChange"> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  options: OptionType[];
  rule?: RegisterOptions;
};

function FormSelect({
  control,
  name,
  label,
  options,
  rule,
  ...selectProps
}: FormSelectProps) {
  const labelId = `${name}-label`;

  return (
    <Controller
      name={name}
      control={control}
      rules={rule}
      defaultValue=""
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={!!fieldState.error}>
          <InputLabel id={labelId}>{label}</InputLabel>
          <Select {...field} {...selectProps} labelId={labelId} label={label}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && (
            <FormHelperText>{fieldState.error.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

export default FormSelect;
