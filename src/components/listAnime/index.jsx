import { Star } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"
const ListAnime = ({api}) => {
    return (
            <div className='grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-3 px-3 '>
            {api.data?.map((anime,index) => {
                return (
                        <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer text-color-primary hover:text-color-accent">
                            <div className="w-full text-color-accent hover:bg-color-accent hover:text-color-primary">
                                <div className="flex  w-full px-3 justify-center items-center py-2 text-color-primary bg-color-secondary">
                                    Id :  {anime.mal_id}
                                </div>
                                <Image
                                    src={anime.images.jpg.image_url}
                                    alt="..." 
                                    width={150}
                                    height={150} 
                                    className=" w-full pt-3 pb-2 px-3"
                                />
                                    <h3 className="font-bold md:text-l text-md py-2 px-3 w-full">
                                        {anime.title}
                                    </h3>
                            </div>
                        </Link>
                )
            })}
            </div>
    )
}

export default ListAnime