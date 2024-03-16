import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api/v1';

export const fetchTodos = async () => {
    const response = await axios.get(`${BASE_URL}/todos`);
    return response.data;
};

export const addTodo = async (title: string) => {
    const response = await axios.post(`${BASE_URL}/todos`, { title, completed: false });
    return response.data;
};

export const deleteTodo = async (id: number) => {
    await axios.delete(`${BASE_URL}/todos/${id}`);
};
