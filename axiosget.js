/**
 * @description get data with axios
 */
const axios = require('axios')

function getData(){

    let a = axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((result) => {
                    
                    let res = result.data
                    let view = res.map(x => {
                        console.log('ini judul ' + '\n' + x.title) 
                        console.log('ini body ' + '\n' + x.body) 
                    }) 
                }).catch((err) => {
                    console.log(err)
                });
    
    return a
}
getData()