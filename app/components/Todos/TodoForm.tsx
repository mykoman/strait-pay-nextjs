"use client";
import { useRef } from "react";
import { SubmitButton } from "./SubmitButton";
import { createTodo } from "@/app/api/actions";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  updatedAt: string;
}

export default function TodoForm() {
  const ref = useRef<HTMLFormElement>(null);
  const processFormData = async (data: FormData) => {
    await createTodo(data);
    ref.current?.reset();
  };
  return (
    <form
      className="w-full max-w-sm mx-auto px-4 py-2"
      ref={ref}
      action={processFormData}
    >
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="text"
          placeholder="Add a task"
          required
        />

        <SubmitButton />
      </div>
    </form>
  );
}
