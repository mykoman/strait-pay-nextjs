"use client";
import { useEffect, useState } from "react";
import { fetchTodos, deleteTodo } from "../../api/todo";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  updatedAt: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const todosData = await fetchTodos();
      setTodos(todosData.data);
    };

    loadTodos();
  }, []);

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = async (id: string) => {}

  return (
    <ul className="divide-y divide-gray-200 px-4">
  {todos.map((todo) => (
    <li key={todo.id} className="py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id={`todo${todo.id}`}
            name={`todo${todo.id}`}
            type="checkbox"
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label
            htmlFor={`todo${todo.id}`}
            className="ml-3 block text-gray-900"
          >
            <span className="text-lg font-medium">{todo.text}</span>
            <span className="text-sm font-light text-gray-500">
              {todo.updatedAt}
            </span>
          </label>
        </div>
        <div className="flex">
          <button
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleEditTodo(todo.id)}
          >
            Edit
          </button>
          <button
            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  ))}
</ul>

  );
};

export default TodoList;
