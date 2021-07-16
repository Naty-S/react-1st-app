import { useState, useEffect, useRef } from 'react';


export const useFetch = ( url ) => {
    
    const isMounted = useRef(true); // referencia si el componente sigue vivo
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {return () => {isMounted.current = false;}}, [] )

    useEffect( () => {
        setState({ data: null, loading: true, error: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                if ( isMounted.current ) { // llamar de forma segura el setState, sino error
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            });
    },[url])

    return state;
}
