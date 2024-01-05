import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export const getTopMovies = async(resource, query) => {
    const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.data
    console.log(anime)
    return anime
}

export const getTrendingMovies = async() => {

}
export const getMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    const data = await response.json()
    return data.results
}