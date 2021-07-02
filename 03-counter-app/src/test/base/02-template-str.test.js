// import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-str';


describe('Pruebas en 02-template-str.js', () => {

  test('getSaludo debe de retornar Hola Kazuha', () => {

    const nombre = 'Kazuha';
    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola ' + nombre);
  })

  test('getSaludo debe de retorar Hola Enyu si no hay argumento nombre', () => {

    const saludo = getSaludo();
    expect(saludo).toBe('Hola Enyu');
  })
})
