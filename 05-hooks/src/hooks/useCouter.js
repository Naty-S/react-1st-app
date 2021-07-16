import { useState } from 'react';


export const useCouter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState);

    const reset = () => {
        setCounter( initialState );
    }

    const increment = (factor = 1) => {
        setCounter( counter + factor );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}
