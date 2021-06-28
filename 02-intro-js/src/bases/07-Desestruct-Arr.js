// Desestructuracion Arreglos

const pj = ['Goku', 'Vegeta', 'Trunks'];

const [p1] = pj;
const [, p2] = pj;
const [, , p3] = pj;

console.log(p1, p2, p3);

const getArr = () => (['ABC', 123]);

const [letras, nums] = getArr();
console.log(letras, nums);
