export type CreateTaskPayload = {
  name: string;
  dueDate: string;
  status: number;
};

export type CreateTaskResponse = {
  id: number;
  name: string;
  dueDate: string;
  status: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
