
const miPromesa = () => {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            //resolve('Valor de la promesa')
            reject('Error de la promesa')
        },1000)
    })
}

const medirTiempoAsync = async() =>{ // return a promise
    try {
        console.log('Inicio')

        const respuesta = await miPromesa()

        console.log(respuesta)

        console.log('Fin')
        return 'fin de medir tiempo'

    } catch (error) {
        return 'Error de medir tiempo'
        //throw 'Error en medir tiempo'//con el catch de la funcion
    }
    
    

}


medirTiempoAsync().then(console.log)
                .catch(console.log)//throw de medirTiempo y reject de miPromesa si no se pone try catch

//miPromesa().then( res => (console.log(res)) )