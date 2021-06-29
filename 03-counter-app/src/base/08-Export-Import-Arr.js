// Export, Import, Arrays func

import heroes from '../data/heroes';

export const getById = id => heroes.find(heroe => heroe.id === id);

export const getByOwner = owner => heroes.filter(heroe => heroe.owner === owner);
