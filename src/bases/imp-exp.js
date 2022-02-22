
import {owners} from '../data/heroes'
import sHeroes from '../data/heroes'


export const getHeroById = (id) => sHeroes.find( (heroe) => heroe.id === id )

export const getHeroesByOwner = (owner) => sHeroes.filter( (heroe) => heroe.owner === owner )



//si se llama en index.js
// import {getHeroById,getHeroesByOwner} from './bases/imp-exp'

// console.log(getHeroById(2))

// console.log(getHeroesByOwner('Marvel'))
