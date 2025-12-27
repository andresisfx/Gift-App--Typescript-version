
import { CustomHeader } from './shared/cpmponents/CustomHeader';
import { Searchbar } from './shared/cpmponents/Searchbar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './shared/cpmponents/GifList';
import { useGifs } from './gifs/hooks/useGifs';

//https://api.giphy.com/v1/gifs/search?api_key=yqNHXNPW7Fmcdo3Wd3zrn1xDyohIyExO&q=&limit=25&lang=es
export const GiftsApp = () => {
  
  const {gifFetched, handleSearch, previousSearch, previosClick} = useGifs();
  
  return (
    <>
    <CustomHeader title="Gifts-App" description="Find the best gifts here"/> 

    <Searchbar buttonTitle="Buscar" placeHolderValue="Buscar un gif" handleSearch={handleSearch}/>

    <PreviousSearches title="Previous Searches" searches={previousSearch} onHandledPreviosClick={previosClick}/>

    <GifList gifs={gifFetched} />
    </>
  )
}
