import { heroes, Owner, type Hero } from "../data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  //   if (!hero) {
  //     throw new Error(`No existe un heroe con el id ${id}`);
  //   }

  return hero;
};

// console.log(getHeroById(6));

/**
 * getHeroesByOwner => Hero[]
 * Filtra heroes por su propietario
 * @param Owner - El propietario por el cual filtrar (DC O Marvel)
 * @returns Array de heroes pertenecientes al propietario.
 */

export const getHeroesByOwner = (owner: Owner) => {
  const heroesByOwner = heroes.filter((hero) => hero.owner === owner);

  return heroesByOwner;
};
