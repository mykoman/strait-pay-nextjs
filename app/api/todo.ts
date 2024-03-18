import axios from "axios";

const BASE_URL = "https://strait-pay-api-todo-3.onrender.com/api/v1";

export const fetchTodos = async () => {
  const response = await axios.get(`${BASE_URL}/todos`);
  return response.data;
};

export const addTodo = async (text: string) => {
  const response = await axios.post(`${BASE_URL}/todos`, { text });
  return response.data;
};

export const updateTodo = async (id: string, isCompleted: boolean) => {
  const response = await axios.patch(`${BASE_URL}/todos/${id}`, {
    isCompleted,
  });
  return response.data;
};

export const deleteTodo = async (id: string) => {
  await axios.delete(`${BASE_URL}/todos/${id}`);
};
