// Lambda func
const f2 = (n) => {
  return `Hola, $(n)`
};
const f3 = (n) => `Hola, $(n)`;
export const getUser = () => ({ uid: '324', uname: 'enyu' }); // no puedo regresar varias cosas

// Tarea
export const getUsuarioActivo = (nombre) => ({
  uid: 'ABC567',
  username: nombre
})
