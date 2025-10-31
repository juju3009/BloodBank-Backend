//1. import json-server
const jsonServer=require('json-server')



//2.create n instance of jsonserver
const server=jsonServer.create()



//3.create a middleware
const middleware=jsonServer.defaults()



//4.create a router
const router=jsonServer.router('db.json')



//5.
server.use(middleware)
server.use(router)


//6.Define port
const PORT=3000 || process.env.PORT


//7.
server.listen(PORT,()=>{
    console.log(`Json server is running in the port ${PORT}`);
    
})