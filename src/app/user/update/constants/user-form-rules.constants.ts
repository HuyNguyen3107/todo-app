export const validatePassword: (value: string) => true | string = (
  value: string
) => {
  if (value && value.length < 6) {
    return "Password must be at least 6 characters";
  }
  return true;
};

export const userFormRules = {
  lastName: {
    required: "Last name is required",
  },
  password: {
    validate: validatePassword,
  },
};
