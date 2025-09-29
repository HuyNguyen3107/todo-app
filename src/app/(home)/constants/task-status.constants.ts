export const TASK_STATUS = {
  COLOR: {
    TODO: "default",
    IN_PROGRESS: "info",
    DONE: "success",
  },
  LABEL: {
    TODO: "Todo",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
  },
  BG_COLOR: {
    TODO: "#f3f4f6",
    IN_PROGRESS: "#e3f2fd",
    DONE: "#e0f7e9",
  },
  TEXT_COLOR: {
    TODO: "#757575",
    IN_PROGRESS: "#1976d2",
    DONE: "#388e3c",
  },
};

export const TASK_STATUS_OPTIONS = [
  { value: 1, label: TASK_STATUS.LABEL.TODO },
  { value: 2, label: TASK_STATUS.LABEL.IN_PROGRESS },
  { value: 3, label: TASK_STATUS.LABEL.DONE },
];
