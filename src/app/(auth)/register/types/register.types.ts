export type RegisterFormInputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName?: string;
  lastName?: string;
};

export interface RegisterResponse {
  email: string;
  lastName: string | null;
  firstName: string | null;
  id: number;
  createdAt: string;
  updatedAt: string;
}
