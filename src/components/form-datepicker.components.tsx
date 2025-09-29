"use client";
import { Controller } from "react-hook-form";
import type { Control, RegisterOptions } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { isPastDay } from "@/utils/validate-day.utils";

type FormDatePickerProps = Omit<DatePickerProps<any>, "value" | "onChange"> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  rule?: RegisterOptions;
  isEdit?: boolean;
};

function FormDatePicker({
  control,
  name,
  rule,
  isEdit,
  ...datePickerProps
}: FormDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        rules={{
          ...rule,
          validate: (value) => isPastDay(value, isEdit),
        }}
        defaultValue={null}
        render={({ field, fieldState }) => (
          <DatePicker
            {...datePickerProps}
            value={field.value ? dayjs(field.value) : null}
            onChange={(date) =>
              field.onChange(date ? date.toISOString() : null)
            }
            sx={{
              width: "100%",
            }}
            slotProps={{
              textField: {
                error: !!fieldState.error,
                helperText: fieldState.error?.message || "",
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default FormDatePicker;
