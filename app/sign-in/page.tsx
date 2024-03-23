"use client";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/app/todos/loading";
import SignInComponent from "../components/Todos/Auth/SignIn";



const SignUp = () => {
  //const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <SignInComponent />
    </div>
  );
};

export default SignUp;
