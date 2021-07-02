import { getById, getByOwner } from '../../base/08-Export-Import-Arr';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Héroes', () => {

  test('debe de retornar un héroe por id', () => {

    const id = 1;
    const heroe = getById(id);
    const heroeData = heroes.find(h => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test('debe de retornar un undefined si Héroe no existe', () => {

    const id = 10;
    const heroe = getById(id);

    expect(heroe).toBe(undefined);
  });

  // debe de retornar un arreglo con los héroes de DC
  test('debe de retornar un arreglo con los héroes de DC', () => {

    const owner = 'DC';
    const heroes = getByOwner(owner);
    const heroesData = heroes.filter(h => h.owner === owner);

    expect(heroes).toEqual(heroesData);

  })

  test('debe de retornar un arreglo con los héroes de Marvel', () => {

    const owner = 'Marvel';
    const heroes = getByOwner(owner);

    expect(heroes.length).toBe(2); // solo hay 2 de Marvel
  })
})
