// Onjetos literales
const persona = {
  nombre: 'Kazuha',
  apellido: 'Kaedehara',
  edad: 25,
  direccion: {
    ciudad: 'Inazuma',
    zip: 506,
    lat: 13.25,
    lng: 34.15,
  }
};

// console.table(persona);
console.log( {persona} ); // como objeto nombre: objeto a donde referencia

const p2 = persona; // es un apuntador, referencia a memoria donde esta 'persona'
const p2_ok = { ...persona } // clon del objeto, sin referenciarlo

p2.nombre = 'Kaz'
p2_ok.nombre = 'Kaz'

console.log( {persona} );
console.log( {p2} );
console.log( {p2_ok} );
