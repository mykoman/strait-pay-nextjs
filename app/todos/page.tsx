import { useEffect, useLayoutEffect } from "react";
import { fetchTodos } from "../api/todo";
import TodoForm from "../components/Todos/TodoForm";
import TodoHeader from "../components/Todos/TodoHeader";
import TodoList from "../components/Todos/TodoList";
import { getTokenCookie } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const token = getTokenCookie()?.value;
  if (!token) {
    redirect("/sign-in");
  }
  const todoData = await fetchTodos({ token });
  return (
    <div className=" bg-white shadow-lg rounded-lg mt-8 px-4 py-8">
      <TodoHeader />
      <TodoForm />
      <TodoList
        todos={todoData.data.todos}
        pagination={todoData.data.pagination}
      />
    </div>
  );
}
