// Template strings
const nombre = 'Kazuha';
const apellido = 'Kaedehara';
const nombreCompleto = `${apellido} ${nombre}
edad: ${20 + 5}`;

export function getSaludo(nombre) {
  return 'Hola ' + nombre;
}
