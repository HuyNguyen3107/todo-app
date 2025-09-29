import { EMAIL_REGEX } from "../../../../constants/regex.types";
const RULES = {
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
};

export default RULES;
