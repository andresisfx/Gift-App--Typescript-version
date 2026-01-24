import {useRef , useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query";
import type { Gif } from "../interfaces/gif.interface";


export const useGifs = () => {

    const [previousSearch, setPreviousSearch] = useState<string[]>([]);
    const [gifFetched, setGifFetched] = useState<Gif[]>([]);
    const gifsCache= useRef<Record <string,Gif[]>>({}); 

    const previosClick = async (term:string) => {

      if(gifsCache.current[term]){
        setGifFetched(gifsCache.current[term])
        return
      } 
      const gifs= await  getGifsByQuery(term);

      setGifFetched(gifs)
      gifsCache.current[term] = gifs
      
    }

   const handleSearch = async (query:string) => {
       const loweCasequery:string = query.toLowerCase().trim();

        if(loweCasequery.length === 0) return 
         
        if (previousSearch.includes(loweCasequery)) return 

        setPreviousSearch([query, ...previousSearch].slice(0,7))
        
      const gifs= await  getGifsByQuery(query);

      setGifFetched(gifs)
      gifsCache.current[query] = gifs
   }
  return {
    gifFetched,
    previousSearch,
    handleSearch,
    previosClick
  }
}
