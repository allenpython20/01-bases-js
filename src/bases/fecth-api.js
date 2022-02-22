
const apiKey = 'ZYCTKzGAlodDk2RBgcotil4c2aEEN7Ce'

//https://api.giphy.com/v1/gifs/random?api_key=ZYCTKzGAlodDk2RBgcotil4c2aEEN7Ce

fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` )
    .then( resp => resp.json() )
    .then( ({data}) =>{
        const {url} = data.images.original
        console.log(url)
    })
      

