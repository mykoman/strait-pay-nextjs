import Image from "next/image";
import { getTokenCookie } from "../utils/auth";
import { signOutAction } from "../api/actions";

export default function Nav() {
  const isTokenValid = getTokenCookie();
  // useEffect(() => {
  //   console.log("isTokenValid", isTokenValid);
  // }, [isTokenValid]);
  // console.log("isTokenValid2222", isTokenValid);
  return (
    <nav className="bg-gray-300 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold text-xl">
            <Image
              alt="StraitPay Logo"
              src="https://www.straitpay.com/icons/logo.svg"
              width={100}
              height={24}
            />
          </div>
          {/* <div className="space-x-4">
            {isTokenValid && (
              <button
                onClick={() => {
                  signOutAction();
                }}
              >
                Logout
              </button>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
}
