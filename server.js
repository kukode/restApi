/**
 * @description test server 
 *
 */
const jsonServer = require('json-server')
const server = jsonServer.create()
const routes = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(routes)
server.listen(3000,()=>{
    console.log("json server running")
})