"use client";
import { useEffect, useState } from "react";
import { fetchTodos, deleteTodo, updateTodo } from "../../api/todo";
import moment from "moment";

interface Todo {
  _id: string;
  text: string;
  isCompleted: boolean;
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

  const handleDeleteTodo = async (_id: string) => {
    await deleteTodo(_id);
    setTodos(todos.filter((todo) => todo._id !== _id));
  };

  const handleToggleTodo = (_id: string, isCompleted: boolean) => {
    updateTodo(_id, !isCompleted);
  };
  return (
    <ul className="divide-y divide-gray-200 px-4">
      {todos.map((todo) => (
        <li key={todo._id} className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id={`todo${todo._id}`}
                name={`todo${todo._id}`}
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => {
                  handleToggleTodo(todo._id, todo.isCompleted);
                }}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <label
                htmlFor={`todo${todo._id}`}
                className={`ml-3 block text-gray-900 ${
                  todo.isCompleted ? "line-through" : ""
                }`}
              >
                <span className="text-lg font-medium">{todo.text}</span>
                <br></br>
                <span className="text-sm font-light text-gray-500">
                  {moment(todo.updatedAt).format("MMMM DD, YYYY, h:mm:ss A")}
                </span>
              </label>
            </div>
            <div className="flex">
              <button
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteTodo(todo._id)}
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
