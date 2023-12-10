import { authUserSession } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="text-color-primary py-5 px-10">
      <h5 className="text-color-accent font-bold text-3xl">Dashboard</h5>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image
          className="w-[300px] mx-auto my-4 rounded-full"
          src={user.image}
          alt="..."
          width={250}
          height={250}
        />
        <div className="flex flex-col justify-center pt-5">
          <h3 className="md:text-2xl sm:text-xl text-l font-bold py-2 ">
            Welcome, <span className="text-color-accent">{user.name}</span>
          </h3>
          <h3 className="md:text-2xl sm:text-xl text-l font-bold py-2 ">
            email : <span className="text-color-accent">{user.email}</span>
          </h3>
          <div className="flex flex-rows text-center pt-8 w-full gap-3">
            <Link
              className="bg-color-accent text-color-primary py-2 px-2 w-[40%]"
              href={"/users/dashboard/collection"}>
              My Colections
            </Link>
            <Link
              className="bg-color-accent text-color-primary py-2 px-2 w-[40%]"
              href={"/users/dashboard/collection"}>
              My Comments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
