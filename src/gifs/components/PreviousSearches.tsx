

interface Props {
    title: string;
    searches: string[],
    onHandledPreviosClick: ( term:string) => void,

}

export const PreviousSearches = ({title, searches, onHandledPreviosClick}:Props) => {
console.log({searches})
    

  return (
    <>
      <div className="previous-searches">
              <h2>{title}</h2>
              {searches.length === 0 && <p>No hay busquedas</p>}
              <ul className="previous-searches-list">
              {searches.map((search)=>{
                  return <li key={search} onClick={() => onHandledPreviosClick(search)}>{search}</li>
              })}
                  
              </ul>
          </div>
    </>
  )
}
