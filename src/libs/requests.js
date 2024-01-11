import axios from "axios"


export const getTopMovies = async(resource, query) => {
    try{
        const response = await axios(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
        return response.data
    }
    catch(err){
        console.log("Error: ", err);
    }
}

export const getTrendingMovies = async() => {

}
export const getMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    const data = await response.json()
    return data.results
}