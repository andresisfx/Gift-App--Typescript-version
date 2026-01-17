import type { GiphyResponse } from "../interfaces/giphy.responses";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "./giphy.api";


export const getGifsByQuery = async (query:string):Promise<Gif[]> => {

    if(query.length === 0) return [];
   
    try {
         const response = await giphyApi<GiphyResponse>(`/search?`,

        {
            params: {
                
                q: query,
                limit: 25,
                offset: 0,
                rating: 'g',
                
            }
        }
    
      )
        return response.data.data.map((gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized.url,
            width: Number(gif.images.downsized.width),
            height: Number(gif.images.downsized.height)
        }))
    } catch (error) {
        console.error(error)
        return []
    }
}