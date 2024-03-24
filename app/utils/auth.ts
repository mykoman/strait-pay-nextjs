import Cookies from "universal-cookie";
const cookies = new Cookies(null);
export const setTokenCookie = (token: string) => {
  cookies.set("token", token);
};

export const getTokenCookie = () => {
  return cookies.get("token");
};

export const deleteTokenCookie = (): void => {
  cookies.remove("token");
};
