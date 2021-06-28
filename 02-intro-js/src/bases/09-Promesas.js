// Promesas, asincronas, se ejecuta luego de lo sincrono

import { getById } from "./bases/08-Export-Import-Arr";

const getByIdAsync = (id) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getById(id);
      console.log('2s despues:');

      if (heroe) { resolve(heroe); }
      else { reject('No se encontro', heroe); }
    }
      , 2000
    )
  })
);

// then: se ejecuto correctamente
getByIdAsync(3)
  .then((heroe) => console.log('Then de la promesa.', 'Heroe:', heroe))
  .catch(console.warn); // solo cuando es un solo arg que recibe el catch, se puede hacer con then tambien
