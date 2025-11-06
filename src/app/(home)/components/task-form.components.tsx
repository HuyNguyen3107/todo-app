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
  submitLabel = "Lưu",
  isEdit,
}: TaskFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <FormInput
            name="name"
            control={control}
            label="Tên Công Việc"
            fullWidth
            rule={rules.name}
            required
          />
        </Grid>
        <Grid size={12}>
          <FormDatePicker
            name="dueDate"
            control={control}
            label="Hạn Hoàn Thành"
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
            label="Trạng Thái"
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
            sx={{
              mt: 2,
              py: 1.5,
              fontWeight: 700,
              borderRadius: 3,
              textTransform: "none",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                boxShadow: "0 12px 30px rgba(102, 126, 234, 0.4)",
                transform: "translateY(-2px)",
              },
              "&:active": {
                transform: "translateY(0)",
              },
              "&:disabled": {
                background: "#ccc",
              },
            }}
          >
            {submitLabel}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TaskForm;
