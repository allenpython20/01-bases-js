

// function saludar(){
//     return "Hola mundo";
// }

// const saludar = function(nombre){
//     return `Hola ${nombre}`;
// }

//si solo es una linea
//const saludar = (nombre) => `Hola ${nombre}`;

const saludar = (nombre)=>{
    return `Hola ${nombre}`;
}

const getUser = () => ({uid:'ABC123',username:'Tony'})//con parentesis si es un objeto

const heroes = [
    {
        id:1,
        name : 'Batman'
    },
    {
        id:2,
        name : 'Superman'
    }
]

// const comprobar = (heroe) => heroe.id === 3

// console.log(heroes.some(comprobar))
// console.log(heroes.find(comprobar))

const comprobar = (heroes,id) => {
    return heroes.some( (heroe)=> id == heroe.id )
}

const valor = comprobar(heroes,2)

console.log(valor)


