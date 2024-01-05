import Image from "next/image";
const SliderCard = ({ movie }) => {
  return (
    <>
      <Image
        src={movie.images.jpg.image_url}
        width={400}
        height={80}
        alt="item.images.jpg.images_url"
        className="  md:h-[200px]
          mr-5 rounded-md hover:border-[6px]
          border-gray-400 transition-all duration-100 ease-in"
      />
    </>
  );
};

export default SliderCard;
