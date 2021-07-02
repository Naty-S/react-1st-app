import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base/05-Funciones'


describe('Pruebas en 05-Funciones', () => {

  test('getUser debe de retornar un objeto ', () => {

    const userTest = {
      uid: 324,
      uname: 'enyu'
    }
    const user = getUser();

    expect(user).toEqual(userTest);
  })

  test('getUsuarioActivo debe de retonar un objeto', () => {

    const nombre = 'Juan';
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: 'ABC567',
      username: nombre
    });
  })
})
