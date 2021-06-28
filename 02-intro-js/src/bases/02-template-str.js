// Template strings
const nombre = 'Kazuha';
const apellido = 'Kaedehara';
const nombreCompleto = `${apellido} ${nombre}
edad: ${20 + 5}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return 'Hola ' + nombre;
}

console.log(`Funcion getSaludo: ${getSaludo(nombre)}`);
