import axios from "axios";
import { User } from "./../types/user";
import { getTokenCookie, setTokenCookie } from "../utils/auth";

const BASE_URL = "https://strait-pay-api-todo-3.onrender.com/api/v1";

export const signIn = async ({ email, password }: Partial<User>) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    if (response?.data?.status === "success") {
      const token = response.data.data.token;
      console.log("token: " + token);
      setTokenCookie(token);
      const retrieved = getTokenCookie();
      console.log("Token retrieved", retrieved);
    } else {
      console.log("An error occured!");
    }
    return response.data;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
};

export const signUp = async ({
  email,
  password,
  firstName,
  lastName,
}: User) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, {
    firstName,
    lastName,
    email,
    password,
  });
  if (response?.data?.status === "success") {
    const token = response.data.data.token;
    console.log("token: " + token);
    setTokenCookie(token);
    const retrieved = await getTokenCookie();
    console.log("Token retrieved", retrieved);
  } else {
    console.log("An error occured!");
  }
  return response.data;
};
