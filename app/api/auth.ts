import axios from "axios";
import { User } from "./../types/user";
import { Router } from "next/router";

const BASE_URL = "https://strait-pay-api-todo-3.onrender.com/api/v1";
// const BASE_URL = "http://localhost:3003/api/v1/auth/login";

export const signIn = async ({ email, password }: Partial<User>) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    if (response?.data?.status === "success") {
      //Router.('/profile')
    } else {
      console.log("An error occured!");
      // Handle errors
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("caught", error);
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
  console.log(response.data);
  return response.data;
};
