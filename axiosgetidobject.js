/**
 * @description take data with axios and return id object value
 */

 const axios = require('axios')

 function getDataId(){

    let obj = axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then((result) => {
                    let res = result.data 
                    console.log('ini judul ' + '\n' + res.title)
                    console.log('ini body ' + '\n' + res.body)     
                }).catch((err) => {
                    console.log(err)
                });
        return obj

 }
 getDataId()