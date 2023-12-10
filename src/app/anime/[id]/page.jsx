import { getAnimeResponse } from "@/libs/api"
import VideoPlayer from "@/components/utilities/videoPlayer";
import Image from "next/image";

const Page = async({params : {id}}) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    console.log(anime);
    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary text-2xl font-bold">{anime.data.title} </h3>
            </div>
            <div className="pt-3 mt-5 mx-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary ">
                <Image 
                    src={anime.data.images.webp.image_url} 
                    alt={anime.data.images.jpg.image_url}
                    width={150} 
                    height={150}
                    className="w-[400px] rounded object-cover "
                />
                <p className="text-color-primary w-full px-6 mt-3 pt-5">{anime.data.synopsis}</p>
            </div>
            <div className="pt-3 px-3 gap-2 justify-between flex sm:flex-nowrap text-color-primary overflow-x-auto">
            <div className="w-36  flex flex-col justify-center items-center mt-5">
                <h3 className="bg-color-accent rounded-full w-full text-center">Popularity</h3>
                <p className="pt-2 text-center m-auto">{anime.data.popularity}</p>
            </div>
            <div className="w-36  flex flex-col justify-center items-center mt-5">
                <h3 className="bg-color-accent rounded-full w-full text-center ">Rating</h3>
                <p className="pt-2 text-center m-auto">{anime.data.rating}</p>
            </div>
            <div className="w-36  flex flex-col justify-center items-center mt-5">
                <h3 className="bg-color-accent rounded-full w-full text-center">Episode</h3>
                <p className="pt-2 text-center m-auto">{anime.data.episodes}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center mt-5">
                <h3 className="bg-color-accent rounded-full w-full text-center">Duration</h3>
                <p className="pt-2 text-center m-auto">{anime.data.duration}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center mt-5">
                <h3 className="bg-color-accent rounded-full w-full text-center">Favorite</h3>
                <p className="pt-2 text-center m-auto">{anime.data.favorites}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
            </div>
        </>
    )
}

export default Page