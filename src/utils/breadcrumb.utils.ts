import { BREADCRUMB_NAME_MAP } from "@/constants/breadcrumb.constants";
import { ROUTE_PATHS } from "@/constants/route-path.constants";

export function getBreadcrumbs(pathname: string) {
  const pathSnippets = pathname.split("/").filter((i) => i);
  const breadcrumbs = [];
  let path = "";
  for (let i = 0; i < pathSnippets.length; i++) {
    path += `/${pathSnippets[i]}`;
    let label = BREADCRUMB_NAME_MAP[path];
    if (!label && /^\/tasks\/\d+\/update$/.test(path)) {
      label = BREADCRUMB_NAME_MAP[ROUTE_PATHS.TASK_UPDATE];
    }
    if (!label && /^\/tasks\/create$/.test(path)) {
      label = BREADCRUMB_NAME_MAP[ROUTE_PATHS.TASK_CREATE];
    }
    if (!label && /^\/user\/update$/.test(path)) {
      label = BREADCRUMB_NAME_MAP[ROUTE_PATHS.USER_UPDATE];
    }
    if (!label && /^\/login$/.test(path)) {
      label = BREADCRUMB_NAME_MAP[ROUTE_PATHS.LOGIN];
    }
    if (!label && /^\/register$/.test(path)) {
      label = BREADCRUMB_NAME_MAP[ROUTE_PATHS.REGISTER];
    }
    if (label) {
      breadcrumbs.push({ to: path, label });
    }
  }
  return [
    { to: ROUTE_PATHS.HOME, label: BREADCRUMB_NAME_MAP[ROUTE_PATHS.HOME] },
    ...breadcrumbs,
  ];
}
