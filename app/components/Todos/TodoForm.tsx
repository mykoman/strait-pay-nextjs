import { revalidatePath } from "next/cache";
import { addTodo, updateTodo } from "../../api/todo";
import { SubmitButton } from "./SubmitButton";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  updatedAt: string;
}

export default async function TodoForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server"
    const todoText = formData.get("text")?.toString();
    if (todoText) {
      await addTodo(todoText);
      revalidatePath("/todos")
      
    }
  };
  return (
    <form className="w-full max-w-sm mx-auto px-4 py-2"  action={handleSubmit}>
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="text"
          placeholder="Add a task"
          required
        />
        {/* <button
          
          type="submit"
        >
          Add
        </button> */}
        <SubmitButton />
      </div>
    </form>
  );
}
