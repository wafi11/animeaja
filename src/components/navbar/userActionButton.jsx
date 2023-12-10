import Link from "next/link";
import { authUserSession } from "@/libs/auth";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

const UserActionButton = async () => {
  const user = await authUserSession();
  const SignIn = () => {
    return (
      <button className="bg-color-primary py-1 rounded-full px-2 ml-2 text-l">
        Login
      </button>
    );
  };
  const SignOut = () => {
    return (
      <button className="bg-color-primary py-1 text-l rounded-full hidden px-2 md:flex">
        Logout
      </button>
    );
  };
  const actionLabel = user ? SignOut() : SignIn();
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className=" flex gap-2 px-2 justify-between items-center">
      {user ? (
        <Link href="/users/dashboard">
          <Image
            className="rounded-full px-1 py-1 ml-3"
            src={user?.image}
            alt="...."
            width={50}
            height={50}
          />
        </Link>
      ) : null}
      <Link href={actionUrl}>{actionLabel}</Link>
    </div>
  );
};

export default UserActionButton;
