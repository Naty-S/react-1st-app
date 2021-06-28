// Variables y Constantes

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 6;

console.log(nombre, apellido, valorDado);

// No se debe usar 'var'
if (true) {
  const nombre = 'Peter';
  let valorDado = 4;
  console.log(valorDado);
}

console.log(valorDado);
