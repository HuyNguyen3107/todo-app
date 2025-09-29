export enum taskStatusEnum {
  TODO = 1,
  IN_PROGRESS = 2,
  DONE = 3,
}
export type Task = {
  id: string;
  name: string;
  status: taskStatusEnum;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};

export type PaginationResponse = {
  total: number;
  page: number;
  perPage: number;
};

export type GetTasksResponse = {
  data: Task[];
  pagination: PaginationResponse;
};

export type TaskStatusKey = "TODO" | "IN_PROGRESS" | "DONE";

export type MuiStatusColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "default";

export type TaskStatusInfo = {
  color: MuiStatusColor;
  label: string;
  bgColor: string;
  textColor: string;
};
