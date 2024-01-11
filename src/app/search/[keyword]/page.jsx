import { getTopMovies } from "@/libs/requests";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKey = decodeURI(keyword);
  const response = await getTopMovies(`anime?q=${decodeKey}`);
  return (
    <div className="bg-blue-500 ">
      <div className="min-w-7xl mx-auto px-4 h-full justify-center items-center">
        <h3 className="py-5 px-3 text-3xl font-bold text-white ">
          Pencarian untuk ... {params.keyword}
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 ">
          {response.data?.map((item, index) => {
            return (
              <Link href={`/anime/${item.mal_id}`} key={index}>
                <Image
                  src={item.images.jpg.image_url}
                  alt="../"
                  width={200}
                  height={100}
                  className="object-cover w-full max-h-65"
                />
                <h1 className="text-white text-xl mt-4" key={item.mal_id}>
                  {item.title}
                </h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
