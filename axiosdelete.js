/**
 * @description method delete with axios
 */

 const axios = require('axios')

 function deleteData(){
  let res = axios.delete('http://localhost:3000/posts/7')
                .then((result) => {
                    console.log ('delete data sukses ' +  result)  
                }).catch((err) => {
                    console.log('error ' + err)
                });
    return res
 }
 deleteData()

 