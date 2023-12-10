import Header  from "@/components/listAnime/header"
import ListAnime from "@/components/listAnime"
import { getAnimeResponse } from "@/libs/api"

const Page = async ({params}) => {
    const key = params.keyword
    // validasi keyboard ui
    const decodeKey = decodeURI(key)
    const response = await getAnimeResponse("anime",`q=${decodeKey}`)
    return (
        <>
            <section>
                <Header title={`serching anime ${decodeKey} ...`} />
                <ListAnime api={response} />
            </section>
        </>
    )
}

export default Page