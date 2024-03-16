import Image from "next/image";
import TodoList from "./components/Todo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
            <TodoList />
        </div>
    </main>
  );
}
