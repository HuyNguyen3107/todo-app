export type LoginFormInputs = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: number;
    email: string;
    firstName: string | null;
    lastName: string;
    createdAt: string;
    updatedAt: string;
  };
  refreshToken: string;
  tokenExpires: number;
};
