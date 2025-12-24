interface Props {
    title: string;
    searches: string[]
}

export const PreviousSearches = (props:Props) => {
  return (
    <>
      <div className="previous-searches">
              <h2>{props.title}</h2>
              {props.searches.length === 0 && <p>No hay busquedas</p>}
              <ul className="previous-searches-list">
              {props.searches.map((search)=>{
                  return <li key={search}>{search}</li>
              })}
                  
              </ul>
          </div>
    </>
  )
}
