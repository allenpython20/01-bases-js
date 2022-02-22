
import giphyApi from "./bases/axios"


const getImage = async() => {
    try{
        const {data} = (await giphyApi.get('/random')).data
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src= url
        document.body.append(img)
        
    }catch(e){
        console.log('Error en la petición',e)
        throw e
    }
    
}

getImage();