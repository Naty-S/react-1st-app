// Funciones

const f = function (n) {
  return `Hola, $(n)`;
}

// Lambda func
const f2 = (n) => {
  return `Hola, $(n)`
};
const f3 = (n) => `Hola, $(n)`;
const f4 = (n) => ({ uid: '324', uname: 'enyu' }); // no puedo regresar varias cosas

