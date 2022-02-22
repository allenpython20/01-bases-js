
const persona = {
    nombre : "Allen",
    edad: 20,
    codeName : "12345",
}

const createHero = ({nombre:name,edad,codeName,power="No tiene poder"})=>(
    {   id:1234,
        name,
        edad,
        codeName,
        power
    }
)


console.log(createHero(persona))
