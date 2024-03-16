"use client";
import { useEffect, useState } from "react";
import { fetchTodos, deleteTodo } from "../../api/todo";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  updatedAt: string;
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const todosData = await fetchTodos();
      setTodos(todosData.data);
    };

    loadTodos();
  }, []);

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
