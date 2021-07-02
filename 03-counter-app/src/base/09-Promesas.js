// Promesas, asincronas, se ejecuta luego de lo sincrono

import { getById } from "./08-Export-Import-Arr";

export const getByIdAsync = (id) => (

  new Promise((resolve, reject) => {

    setTimeout(() => {

      const heroe = getById(id);

      if (heroe) { resolve(heroe); }
      else { reject('No se encontro'); }
    }
      , 1500
    )
  })
);
