import { fetchTodos } from "../api/todo";
import TodoForm from "../components/Todos/TodoForm";
import TodoHeader from "../components/Todos/TodoHeader";
import TodoList from "../components/Todos/TodoList";

export default async function Home() {

  const todoData = await fetchTodos();
  return (
      <div className=" bg-white shadow-lg rounded-lg mt-8 px-4 py-8">
      <TodoHeader />
      <TodoForm />
      <TodoList todos={todoData.data} />
    </div>
  );
}
