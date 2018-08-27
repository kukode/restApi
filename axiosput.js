/**
 * @description edit data with axios
 */

 const axios = require('axios')

 axios.put('http://localhost:3000/posts/8',{
     "name" : "jono",
     "password" : "999"
 })
 .then((result) => {
 console.log('sukses' + result)    
 }).catch((err) => {
     console.log(err)
 });
