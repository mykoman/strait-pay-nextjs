"use client";
import { useEffect, useLayoutEffect } from "react";
import { fetchTodos } from "../api/todo";
import TodoForm from "../components/Todos/TodoForm";
import TodoHeader from "../components/Todos/TodoHeader";
import TodoList from "../components/Todos/TodoList";
import { getTokenCookie } from "../utils/auth";
import { redirect, useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = await getTokenCookie();
      if (!token) {
        router.push("/sign-in"); // Use router for navigation
      }
    };
    checkToken();
  }, []);

  const todoData = await fetchTodos();
  return (
    <div className=" bg-white shadow-lg rounded-lg mt-8 px-4 py-8">
      <TodoHeader />
      <TodoForm />
      <TodoList todos={todoData.data} />
    </div>
  );
}
