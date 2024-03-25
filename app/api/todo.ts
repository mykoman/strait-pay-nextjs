import axios from "axios";
import { Todo } from "../types/todos";

const BASE_URL = "https://strait-pay-api-todo-3.onrender.com/api/v1";
// Todo: change token to dynamically
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDBmNGQ5OGNlMDMyNWViNGIzNjI5NSIsImVtYWlsIjoidGVzdEBtYWlsLmNvbSIsImlhdCI6MTcxMTMzODcxNCwiZXhwIjoxNzEzOTMwNzE0fQ.BI4BOsbiY7uGaxR3tZbG29aMkANYJbhA2fzloeJEShE";

export const fetchTodos = async (): Promise<{
  data: { todos: Todo[]; pagination: {} };
}> => {
  const response = await axios.get(`${BASE_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("todosssss", response.data);
  return response.data;
};

export const addTodo = async (text: string) => {
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
};

export const updateTodo = async (id: string, isCompleted: boolean) => {
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
};

export const deleteTodo = async (id: string) => {
  await axios.delete(`${BASE_URL}/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
