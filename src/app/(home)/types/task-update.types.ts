export type UpdateTaskPayload = {
  name: string;
  dueDate: string;
  status: number;
};

export type UpdateTaskResponse = {
  id: number;
  name: string;
  dueDate: string;
  status: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
