export const getErrorMessage = (status: number): string => {
  switch (status) {
    case 400:
      return "Invalid request. Please check your input and try again.";
    case 409:
      return "User already exists. Please log in instead.";
    case 422:
      return "Email is exists. Please use a different email.";
    case 500:
      return "Server error. Please try again later.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
};
