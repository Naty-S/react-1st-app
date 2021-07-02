import { getByIdAsync } from "../../base/09-Promesas";
import heroes from '../../data/heroes';


describe('Pruebas con promesas', () => {

  test('getByIdAsync debe de retornar un Héroe async', (done) => {

    const id = 1;

    getByIdAsync(id)
      .then(heroe => {
        expect(heroe).toBe(heroes[0]);
        done();
      });
  });

  test('debe de obtener un error si el héroe por id no existe', (done) => {

    const id = 10;
    getByIdAsync(id)
      .catch(error => {
        expect(error).toBe('No se encontro');
        done();
      });
  });
});

// El 'done' es para decirle que espere las tareas asincronas, sino siempre pasara la prueba
