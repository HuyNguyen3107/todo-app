import { EMAIL_REGEX } from "../../../../constants/regex.types";
const validateConfirmPassword = (value: string, context: any) => {
  return value === context.password || "Passwords do not match";
};
export const RULES = {
  email: {
    required: "Email is required",
    pattern: {
      value: EMAIL_REGEX,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
  },
  confirmPassword: {
    required: "Confirm password is required",
    validate: validateConfirmPassword,
  },
  lastName: {
    required: "Last name is required",
  },
};
