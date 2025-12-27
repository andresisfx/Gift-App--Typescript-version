import { useState } from "react";

import { getGifsByQuery } from "../actions/get-gifs-by-query";
import type { Gif } from "../interfaces/gif.interface";
import { mockGifs } from "../../mock-data/gifts.mock";

export const useGifs = () => {

        const [previousSearch, setPreviousSearch] = useState<string[]>([])
    const [gifFetched, setGifFetched] = useState<Gif[]>(mockGifs)
    const previosClick = async (term:string) => {
      const previousGifs = await getGifsByQuery(term)

      setGifFetched(previousGifs)
    }

   const handleSearch = async (query:string) => {
       const loweCasequery:string = query.toLowerCase().trim();

        if(loweCasequery.length === 0) return 
         
        if (previousSearch.includes(loweCasequery)) return 

        setPreviousSearch([query, ...previousSearch].slice(0,7))
        
      const gifs= await  getGifsByQuery(query);

      setGifFetched(gifs)

   }
  return {
    gifFetched,
    previousSearch,
    handleSearch,
    previosClick
  }
}
