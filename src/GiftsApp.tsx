
import {mockGifs} from './mock-data/gifts.mock'
import { CustomHeader } from './shared/cpmponents/CustomHeader';
import { Searchbar } from './shared/cpmponents/Searchbar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './shared/cpmponents/GifList';
export const GiftsApp = () => {
  return (
    <>
    <CustomHeader title="Gifts-App" description="Find the best gifts here"/> 

    <Searchbar buttonTitle="Buscar" placeHolderValue="Buscar un gif"/>

    <PreviousSearches title="Previous Searches" searches={["One Punch", "Samurai X", "Dragon Ball"]}/>

    <GifList gifs={mockGifs} />
    </>
  )
}
