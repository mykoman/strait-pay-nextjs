"use client"
import { useEffect, useState } from "react";
import { fetchTodos, deleteTodo } from "../api/todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const todosData = await fetchTodos();
      console.log("todosData", todosData)
      setTodos(todosData.data);
    };

    loadTodos();
  }, []);

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
