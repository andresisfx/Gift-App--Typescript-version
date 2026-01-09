
import { useCounter } from '../hooks/useCounter';

export const MyCounterApp = () => {
 

  const {counter,handleAdd,handleReset,handleSubstract} = useCounter(5);
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>{counter}</h1>

        <div>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>

    
  )
}
