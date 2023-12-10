import ListAnime from '@/components/listAnime'
import Header from '@/components/listAnime/header'
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '../libs/api'


const Page = async() => {
  const topAnime = await getAnimeResponse("top/anime","limit=6")
  let recomendationsAnime = await getNestedAnimeResponse("recommendations/anime" ,"entry")
  recomendationsAnime = reproduce ( recomendationsAnime , 6)
  console.log(recomendationsAnime)
  const topManga = await getAnimeResponse("top/manga", "limit=6")
  return (
    <>
    {/* Recomendation */}
      <section>
        <Header title='Recomendations'/>
        <ListAnime api={recomendationsAnime} />
      </section>
    {/* Top Anime */}
      <section>
        {/* <Banner ID={dataById.data?.images.webp.large_image_url} /> */}
        <Header title='Top Anime'/>
        <ListAnime api={topAnime} />
      </section>
    {/* Top Anime */}
      <section>
        {/* <Banner ID={dataById.data?.images.webp.large_image_url} /> */}
        <Header title='Top Manga'/>
        <ListAnime api={topManga} />
      </section>
    </>
    
  )
}

export default Page