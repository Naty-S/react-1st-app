// Desestructuracion Arreglos

const pj = ['Goku', 'Vegeta', 'Trunks'];

const [p1] = pj;
const [, p2] = pj;
const [, , p3] = pj;

export const getArr = () => (['ABC', 123]);

// Tarea
// Hook
const usState = (valor) => {
  return [valor, () => { console.log('Dentro del estado') }];
}
