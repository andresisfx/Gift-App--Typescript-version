import { useState } from "react";



export const useCounter = (initialState: number=10) => {
    


    const [counter, setCounter] = useState(initialState);

    const handleAdd=()=>{
        setCounter(counter + 1);
    }

    const handleSubstract=()=>{
        setCounter(counter - 1);
    }

    const handleReset=()=>{
        setCounter(initialState);
    }


  return {

    counter,
    handleAdd,
    handleReset,
    handleSubstract
   

  }
}

