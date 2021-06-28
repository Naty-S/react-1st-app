// Export, Import, Arrays func

// import {} from '.data/heroes';
// imoprt defaultImport from './data/heroes';
// import heroes, { owners, otraImport } from "./data/heroes";
// import { heroes, owners, otraImport } from "./data/heroes"; cuando estoy exportando varios sin default
import { heroes } from '../data/heroes';

// find() -> foreach
export const getById = id => heroes.find(heroe => heroe.id === id);
// console.log(getById(2));

export const getByOwner = owner => heroes.filter(heroe => heroe.owner === owner);
// console.log(getByOwner('DC'));
