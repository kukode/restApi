/**
 * @description take data json placeholder comment with axios
 */

 const axios = require('axios')

 function getComment(){

    const url = axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
                    .then((result) => {
                        let arr = result.data 
                        arr.map(x => {
                            console.log('ini post Id ' + '\n' + x.postId)
                            console.log('ini  Id ' + '\n' + x.id)
                            console.log('ini name ' + '\n' + x.name)
                            console.log('ini email ' + '\n' + x.email)
                            console.log('ini body ' + '\n' + x.body)
                        })   
                    }).catch((err) => {
                        console.log(err)
                    });
        return url

 }
//  getComment()

/**
 * @description take data with url ? comment on post id
 */
function getCommentQuery(){

    const link = axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
                    .then((result)=>{
                        let obj = result.data
                        obj.map(y => {
                            console.log('ini post id ' + y.postId)
                        })
                    })
                    .catch((err)=>{

                    });
    return link
}
getCommentQuery()