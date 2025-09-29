import FormInput from "@/components/form-input.components";
import FormDatePicker from "@/components/form-datepicker.components";
import FormSelect from "@/components/form-select.components";
import { Button, Grid } from "@mui/material";
import type { Control, RegisterOptions } from "react-hook-form";
import { TASK_STATUS_OPTIONS } from "../constants/task-status.constants";

interface TaskFormProps {
  control: Control<any>;
  rules: Record<string, RegisterOptions>;
  onSubmit: () => void;
  isPending?: boolean;
  submitLabel?: string;
  isEdit?: boolean;
}

function TaskForm({
  control,
  rules,
  onSubmit,
  isPending,
  submitLabel = "Save",
  isEdit,
}: TaskFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <FormInput
            name="name"
            control={control}
            label="Name"
            fullWidth
            rule={rules.name}
            required
          />
        </Grid>
        <Grid size={12}>
          <FormDatePicker
            name="dueDate"
            control={control}
            label="Due Date"
            rule={rules.dueDate}
            disablePast={true}
            format="DD/MM/YYYY"
            isEdit={isEdit}
          />
        </Grid>
        <Grid size={12}>
          <FormSelect
            name="status"
            control={control}
            label="Status"
            options={TASK_STATUS_OPTIONS}
            rule={rules.status}
            required
          />
        </Grid>
        <Grid size={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isPending}
            fullWidth
          >
            {submitLabel}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TaskForm;
