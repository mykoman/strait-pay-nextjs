import axios from "axios";
import { Todo } from "../types/todos";

const BASE_URL = "https://strait-pay-api-todo-3.onrender.com/api/v1";
// Todo: change token to dynamically

export const fetchTodos = async ({
  skip,
  isCompleted,
  token,
}: {
  skip?: number;
  isCompleted?: boolean;
  token: string;
}): Promise<{
  data: { todos: Todo[]; pagination: {} };
}> => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        skip,
        isCompleted,
      },
    });
    return response.data;
  } catch (error) {
    console.error("errorrrrr", error);
    throw new Error("Error while fetching");
  }
};

export const addTodo = async (text: string, token: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/todos`,
      { text },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("errorrrrr22", error);
  }
};

export const updateTodo = async ({
  id,
  isCompleted,
  token,
}: {
  id: string;
  isCompleted: boolean;
  token: string;
}) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/todos/${id}`,
      {
        isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("errorrrrr23", error);
  }
};

export const deleteTodo = async (id: string, token: string) => {
  try {
    await axios.delete(`${BASE_URL}/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log("errrrrrrrr", error);
  }
};
