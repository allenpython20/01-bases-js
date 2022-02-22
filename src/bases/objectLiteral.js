const persona = {
    nombre : 'Tony',
    edad : 'Stark',
    direccion : {
        ciudad : "New York"
    }

    
}
const persona2 = {...persona} //crea una copia

persona2.nombre = "Allen"

console.log(persona2)


