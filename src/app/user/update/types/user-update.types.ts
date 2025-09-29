export type UserUpdateFormInputs = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
};

export type UserUpdateResponse = {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  password?: string;
  createdAt: string;
  updatedAt: string;
};
