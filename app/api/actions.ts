"use server";

import { revalidatePath } from "next/cache";
import { addTodo, deleteTodo, updateTodo } from "./todo";
import { signIn, signUp } from "./auth";
import { User } from "../types/user";
import { redirect } from "next/navigation";
import { deleteTokenCookie, getTokenCookie } from "../utils/auth";

export const createTodo = async (formData: FormData) => {
  const todoText = formData.get("text")?.toString();
  if (todoText) {
    await addTodo(todoText);
    revalidatePath("/todos");
  }
};

export const deleteTodoItem = async (_id: string) => {
  await deleteTodo(_id);
  revalidatePath("/todos");
};

export const updateTodoItem = async (_id: string, isCompleted: boolean) => {
  console.log("cookkkkkkkkkkkk", getTokenCookie());
  await updateTodo(_id, !isCompleted);
  revalidatePath("/todos");
};

export const signInAction = async ({ email, password }: Partial<User>) => {
  await signIn({ email, password });
  redirect("/todos");
};

export const signUpAction = async ({
  email,
  password,
  firstName,
  lastName,
}: User) => {
  await signUp({ email, password, firstName, lastName });
  redirect("/todos");
};

export const signOutAction = async () => {
  //await signIn({ email, password });
  deleteTokenCookie();
  redirect("/sign-in");
};
