import Image from "next/image";
import { deleteTokenCookie, getTokenCookie } from "../utils/auth";
import { redirect } from "next/navigation";
import { signOutAction } from "../api/actions";

export default function Nav() {
  const isTokenValid = getTokenCookie()?.value;

  const handleLogout = async () => {
    "use server";
    await signOutAction();
  };

  return (
    <nav className="bg-gray-300 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold text-xl">
            <Image
              alt="Sleeky Programmers"
              src="https://i.ibb.co/vYSr5sq/Logo-horizontal-Blue.png"
              width={100}
              height={24}
            />
          </div>
          <div className="space-x-4">
            {isTokenValid && (
              <form action={handleLogout}>
                <button type="submit">Logout</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
