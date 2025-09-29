export const getLoginErrorMessage = (errorCode: number): string => {
  switch (errorCode) {
    case 400:
      return "Invalid request. Please check your input.";
    case 401:
      return "Unauthorized. Please log in.";
    case 404:
      return "User not found.";
    case 422:
      return "Email or password is incorrect.";
    case 500:
      return "Internal server error. Please try again later.";
    default:
      return "An unknown error occurred.";
  }
};
