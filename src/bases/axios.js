import axios from 'axios'

const apiKey = 'ZYCTKzGAlodDk2RBgcotil4c2aEEN7Ce'

const giphyApi = axios.create({

    baseURL : 'https://api.giphy.com/v1/gifs',
    params : {
        apiKey : apiKey
    }

});

export default giphyApi

// giphyApi.get('/random')
//     .then( resp => {
//         const {data} = resp.data
//         const {url} = data.images.original
//         const img = document.createElement('img')
//         img.src= url
        
//         document.body.append(img)


//     })

