"use client";
import { Todo } from "@/app/types/todos";
import moment from "moment";
import { useTransition } from "react";
import { deleteTodoItem, updateTodoItem } from "@/app/api/actions";
import Pagination from "../Pagination";
// import Pagination from "../Pagination";
const TodoList = ({ todos, pagination }: { todos: Todo[]; pagination: {} }) => {
  return (
    <div>
      <ul className="divide-y divide-gray-200 px-4">
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo._id} />
        ))}
      </ul>
      <Pagination pagination={pagination} />
    </div>
  );
};

const TodoListItem = ({ todo }: { todo: Todo }) => {
  const [isDeletePending, startDeleteTransition] = useTransition();
  const [isUpdatePending, startUpdateTransition] = useTransition();

  return (
    <li
      key={todo._id}
      className={`py-4 ${
        isDeletePending || isUpdatePending ? "opacity-30" : "opacity-100"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className=" ">
          <div className="flex item-center gap-2">
            <input
              id={`todo${todo._id}`}
              name={`todo${todo._id}`}
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => {
                startUpdateTransition(() => {
                  updateTodoItem(todo._id, todo.isCompleted);
                });
              }}
              className="h-4 self-center  w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label
              htmlFor={`todo${todo._id}`}
              className={`block  text-gray-900 ${
                todo.isCompleted ? "line-through" : ""
              }`}
            >
              <span className=" font-medium">{todo.text}</span>
            </label>
          </div>
          <time
            dateTime={todo.updatedAt}
            className="text-xs font-light text-gray-500"
          >
            {moment(todo.updatedAt).format("MMMM DD, h:mm A")}
          </time>
        </div>
        <div className="flex">
          <button
            disabled={isDeletePending}
            className="ml-2 text-gray-700 py-2 px-4 text-xs rounded"
            onClick={() => {
              startDeleteTransition(() => {
                deleteTodoItem(todo._id);
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoList;
