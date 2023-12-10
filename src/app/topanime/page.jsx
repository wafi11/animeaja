"use client"
import ListAnime from "@/components/listAnime"
import HeaderMenu from "@/components/utilities/headerMenu"
import Pagination from "@/components/utilities/pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "../../libs/api"

const Page = () => {
    const [page,setPage] = useState(1)
    const [topAnime,setTopAnime] = useState([])

    const fetchData = async() => {
        const response = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(response)
    }
    useEffect(() => {
        fetchData()
    },[page])
    return (
        <>
        <HeaderMenu title={` Top Anime `}/>
        <ListAnime api={topAnime} />
        <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}

export default Page