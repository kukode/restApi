/**
 * @description use method post with axios
 * 
 */
const axios = require('axios')


function addApi(){
    const url = axios.post('http://localhost:3000/posts',{
                        
                        "name" : "cvcvc",
                        "password" : "cvcvc"
                    })
                    .then((result) => {
                        console.log('sukses post to json server' )    
                    }).catch((err) => {
                        console.log(err)
                    });
    return url
}
addApi()