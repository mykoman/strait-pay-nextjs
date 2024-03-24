"use client";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/app/todos/loading";
import SignInComponent from "../components/Auth/SignIn";

const SignUp = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <SignInComponent />
    </div>
  );
};

export default SignUp;
