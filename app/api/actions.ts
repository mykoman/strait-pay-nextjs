"use server";

import { revalidatePath } from "next/cache";
import { addTodo, deleteTodo, updateTodo } from "./todo";

export const createTodo = async (formData: FormData) => {

  const todoText = formData.get("text")?.toString();
  if (todoText) {
    await addTodo(todoText);
    revalidatePath("/todos");
  }
};

export const deleteTodoItem = async (_id: string) => {
    await deleteTodo(_id);
    revalidatePath("/todos")
  };


  export const updateTodoItem = async (_id: string, isCompleted: boolean) => {
    await updateTodo(_id, !isCompleted);
    revalidatePath("/todos")
  };
