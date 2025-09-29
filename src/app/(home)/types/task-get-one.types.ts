export type GetTaskResponse = {
  id: number;
  name: string;
  dueDate: string;
  status: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  user: {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
  };
};
