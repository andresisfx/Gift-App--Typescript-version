import { useState,useEffect } from "react"
interface Props {
    buttonTitle:string;
    placeHolderValue:string;
    handleSearch:(query:string) => void

}

export const Searchbar = ({buttonTitle,placeHolderValue="Buscar",handleSearch}:Props) => {

  const [query, setQuery] = useState('');
  useEffect(() => {
    const timeOutId= setTimeout(() => {
      handleSearch(query);
      setQuery('');
    },700)

    return ()=>{
      clearTimeout(timeOutId)
    }
  },[query,handleSearch])
  const onHandleSubmit=()=>{
    
    handleSearch(query);
    setQuery('');
    
  }

  const hndlekeyDown : (event: React.KeyboardEvent<HTMLInputElement>) => void = (event) => {
     
    
          if(event.key === 'Enter'){
            onHandleSubmit()
          }
        
  }

 
  return (
    <>
    <div className="search-container">
  
        <input 
        type="text" 
        placeholder={placeHolderValue} 
        onKeyDown={ hndlekeyDown}
        value={query}
        onChange={(event) => setQuery(event.target.value)}/>
        <button
        onClick={onHandleSubmit}
        >{buttonTitle}</button>
    </div>
    </>
  )
}
