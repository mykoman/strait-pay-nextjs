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
      await setTokenCookie(token);
      const retrieved = await getTokenCookie();
      console.log("Token retrieved", retrieved);
    } else {
      console.log("An error occured!");
      // Handle errors
    }
    //revalidatePath("/todos");
    return response.data;
  } catch (error) {
    console.error("Error during sign-in:", error);
    // You can handle the error here, e.g., redirect to an error page or display an error message
    // For example, if using Next.js, you can use the useRouter hook to navigate to an error page
    //const router = useRouter();
    //router.push("/error"); // Replace "/error" with the path to your error page
    throw error; // Rethrow the error if needed
    //console.log("caught", error.message);
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
