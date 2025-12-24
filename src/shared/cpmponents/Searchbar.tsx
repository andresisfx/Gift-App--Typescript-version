interface Props {
    buttonTitle:string;
    placeHolderValue:string;
}

export const Searchbar = ({buttonTitle,placeHolderValue="Buscar"}:Props) => {
  return (
    <>
    <div className="search-container">
        <input type="text" placeholder={placeHolderValue} />
        <button>{buttonTitle}</button>
    </div>
    </>
  )
}
