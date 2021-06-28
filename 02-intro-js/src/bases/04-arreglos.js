// Arreglos (objetos tambien)

// const arr = new Array( 100 ); // raro que se use, solo para arreglos con inicialmente 
// tamanio fijo, se puede expadir
const arr = [1, 5, 4];
// arr.push(1); // no recomendable usar

let arr2 = [...arr, 5];

const arr3 = arr2.map(function (x) {
  return x * 2;
})

console.log(arr);
console.log(arr2);
console.log(arr3);
