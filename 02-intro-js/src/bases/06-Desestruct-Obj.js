// Desestructuracion objectos
// Asignacion Desestructurada

const persona = {
  nombre: 'Enyu',
  edad: 24,
  clave: 'cmn456',
  rango: 'En persona'
}

const { nombre, edad: edadP } = persona;

console.log(nombre, edadP);
// console.log(edad); Error

// Hook
const usContext = ({ nombre, edad: edadP, rango = 'Algo' }) => (
  { nClave: rango, anios: edadP, latlng: { lat: 14.567, lng: 12.456 } }
);

const { nClave, anios, latlng: { lat, lng } } = usContext(persona);
// const {lat, lng} = latlng;

console.log(nClave, anios, lat, lng);
