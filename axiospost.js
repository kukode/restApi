/**
 * @description use method post with axios
 * 
 */
const axios = require('axios')


function addApi(){
    const url = axios.post('http://localhost:3000/posts',{
                        
                        "name" : "rubi",
                        "password" : "rub1"
                    })
                    .then((result) => {
                        console.log('sukses post to json server' )    
                    }).catch((err) => {
                        console.log(err)
                    });
    return url
}
addApi()