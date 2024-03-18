// import { useEffect, useState } from "react";
import { revalidatePath } from "next/cache";
import { addTodo, updateTodo } from "../../api/todo";
import { useRef } from "react";
import { useRouter } from "next/navigation";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  updatedAt: string;
}

export default function TodoForm() {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    const todoText = formData.get("text")?.toString();
    if (todoText) {
      await addTodo(todoText);
      
      ref.current?.reset();
      router.push('/todos')
      //revalidatePath("/");
    }
  };
  return (
    <form className="w-full max-w-sm mx-auto px-4 py-2" ref={ref} action={handleSubmit}>
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="text"
          placeholder="Add a task"
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
