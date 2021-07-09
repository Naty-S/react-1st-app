// Custom hook, extrae una logica que quiero reutilizar de forma sencilla

import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    // init state
    data: [],
    loading: true
  });

  // Ejecutar codigo de manera condicional
  // NO puede ser async!!
  useEffect(() => {
    getGifs(category).then(imgs => {
      setState({
        data: imgs,
        loading: false
      });
    })
  }, [category] // si cambia la categoria, ejecuta esto de nuevo
  )

  return state;
}
