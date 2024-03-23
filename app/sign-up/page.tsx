"use client";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/app/todos/loading";
import SignUpComponent from "../components/Todos/Auth/SignUp";



const SignUp = () => {
  //const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <SignUpComponent />
    </div>
  );
};

export default SignUp;
