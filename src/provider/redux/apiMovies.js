import { create, useStore } from "zustand";

export const useApiStore = create((set) => ({
    movie : [],
    loading : false,
    fetchApi : async (resource,query) => {
        try{
            const response = await fetch(
                `https://api.jikan.moe/v4/${resource}?${query}`
                )
                const result = await response.json()
                set({movie:result.data})

            }catch(err){
            set((console.log(err)))
        }
    },
}))

export const useSearchStore = create((set) => ({
    searchResult:[],
    query:"",
    handleQuery:(value)=>set({query: value}),
        getSearchResults:async ()=>{
            if(!useApiStore.getState().query.length > 0) return;
            const api_key="w6mf513y"
            const url=`https://api.jikan.moe/v4/search/an
            imdb`+`?q=${encodeURIComponent(useApiStore.getState().query
                )}&limit=25&page=1&api_key=${api_key}`
                const res =await fetch(url).then(r=> r.json())
                set({searchResult:res.results})
                }
                
}))

