"use server";

import { cookies } from "next/headers";
import { LoginResponse } from "./types/login.types";

export const setAuthCookies = async (data: LoginResponse) => {
  const cookieStore = await cookies();
  cookieStore.set("auth-storage", JSON.stringify(data));
};
