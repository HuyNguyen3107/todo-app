import { ROUTE_PATHS } from "./route-path.constants";

export const BREADCRUMB_NAME_MAP: Record<string, string> = {
  [ROUTE_PATHS.HOME]: "Home",
  [ROUTE_PATHS.TASK_LIST]: "Task List",
  [ROUTE_PATHS.TASK_CREATE]: "Create Task",
  [ROUTE_PATHS.TASK_UPDATE]: "Update Task",
  [ROUTE_PATHS.USER_UPDATE]: "Update Account",
  [ROUTE_PATHS.LOGIN]: "Login",
  [ROUTE_PATHS.REGISTER]: "Register",
};
