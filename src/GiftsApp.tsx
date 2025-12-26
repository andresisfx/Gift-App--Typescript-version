import { useState } from 'react';
import {mockGifs} from './mock-data/gifts.mock'
import { CustomHeader } from './shared/cpmponents/CustomHeader';
import { Searchbar } from './shared/cpmponents/Searchbar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './shared/cpmponents/GifList';

//https://api.giphy.com/v1/gifs/search?api_key=yqNHXNPW7Fmcdo3Wd3zrn1xDyohIyExO&q=&limit=25&lang=es
export const GiftsApp = () => {
  
    const [previousSearch, setPreviousSearch] = useState<string[]>([])
    const previosClick = (term:string) => {
      console.log({term})
   }

   const handleSearch = (query:string) => {
       const loweCasequery:string = query.toLowerCase().trim();

        if(loweCasequery.length === 0) return 
         
        if (previousSearch.includes(loweCasequery)) return 

        setPreviousSearch([query, ...previousSearch].slice(0,7))
 

   }
  
  return (
    <>
    <CustomHeader title="Gifts-App" description="Find the best gifts here"/> 

    <Searchbar buttonTitle="Buscar" placeHolderValue="Buscar un gif" handleSearch={handleSearch}/>

    <PreviousSearches title="Previous Searches" searches={previousSearch} onHandledPreviosClick={previosClick}/>

    <GifList gifs={mockGifs} />
    </>
  )
}
