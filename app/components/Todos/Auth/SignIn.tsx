import { signIn } from "@/app/api/auth";
import { useRef } from "react";

 
export default function SignIn() {
    const ref = useRef<HTMLFormElement>(null);
    const handleSubmit = async (formData: FormData) => {
        
        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();
        if (email && password) {
         const data = await signIn({email, password});
          console.log("client", data);
          ref.current?.reset();
          //router.push('/todos')
          //revalidatePath("/");
        }
      };
  
 
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <h2 className="text-2xl text-black text-center font-bold mb-4">Login</h2>
  <form action={handleSubmit} ref={ref}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Login
      </button>
    </div>
  </form>
</div>


  )
}