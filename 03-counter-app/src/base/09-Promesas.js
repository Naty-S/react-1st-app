// Promesas, asincronas, se ejecuta luego de lo sincrono

import { getById } from "./08-Export-Import-Arr";

export const getByIdAsync = (id) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getById(id);
      console.log('2s despues:');

      if (heroe) { resolve(heroe); }
      else { reject('No se encontro', heroe); }
    }
      , 1500
    )
  })
);
