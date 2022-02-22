import {getHeroById,getHeroesByOwner} from './bases/imp-exp'



const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            const hero = getHeroById(id)
            if(hero){
                resolve(`El heroe es ${hero.name}`)
            }else{
                reject("No se encontro al heroe")
            }
        },1000)
    })
}

getHeroeByIdAsync(2)
    .then( h => console.log(h))
    .catch( err=>console.log(err) )