import { signUp } from "@/app/api/auth";
import { useRef } from "react";

 
export default function SignIn() {
    const ref = useRef<HTMLFormElement>(null);
    const handleSubmit = async (formData: FormData) => {
        
        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();
        const firstName = formData.get("password")?.toString();
        const lastName = formData.get("password")?.toString();
        if (email && password && firstName && lastName) {
            console.log({email, password, firstName, lastName})
         const data = await signUp({email, password, firstName, lastName});
          console.log("client", data);
          ref.current?.reset();
          //router.push('/todos')
          //revalidatePath("/");
        }
      };
  
 
  return (
    <div>
    <h1 className="text-3xl text-black text-center font-bold mb-8">User Registration</h1>
    <form action={handleSubmit} ref={ref} className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          name="firstName"
          placeholder="First Name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />
      </div>
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
          Register
        </button>
      </div>
    </form>
  </div>  
  )
}