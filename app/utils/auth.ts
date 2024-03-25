import { cookies } from "next/headers";

export const setTokenCookie = (token: string) => {
  cookies().set("token", token, { httpOnly: true });
};

export const getTokenCookie = () => {
  return cookies().get("token");
};

export const deleteTokenCookie = (): void => {
  cookies().delete("token");
};
