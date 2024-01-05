import Header from "@/components/SliderAnime/header";
import { getTopMovies } from "@/libs/requests";
import axios from "axios";
import Image from "next/image";

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
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 ">
          {response.data?.map((item, index) => {
            return (
              <div className="w-full " key={index}>
                <Image
                  src={item.images.jpg.image_url}
                  width={250}
                  height={40}
                  className="object-cover w-full"
                />
                <h1 className="text-white text-xl" key={item.mal_id}>
                  {item.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
