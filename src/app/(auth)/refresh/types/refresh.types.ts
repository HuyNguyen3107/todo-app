export type RefreshDataRequest = {
  refresh_token: string;
};

export type RefreshDataResponse = {
  token: string;
  refreshToken: string;
  tokenExpires: number;
};
