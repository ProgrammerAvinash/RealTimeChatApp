 const express = require('express');
 const socketio = require('socket.io');
 const http = require('http');

 const PORT = process.env.PORT || 5000 ; 
 const router =require('./router')

 const app = express();
 const server = http.createServer(app);
 const io = socketio(server);


 io.on('connection',(socket)=> {

    console.log('new user connected');
<<<<<<< HEAD

    socket.on('join', ({name,room})=>{
        console.log(name,room);
        
    })

=======
    socket.on('join', ({name,room}) =>{
     console.log(name,room)
    })
>>>>>>> dc3da08d5273bdbdfa8ad53fcbec71f14c8f6d9d
    socket.on('disconnect',()=>{
        console.log('user disconnected');
        
    })
 });

 app.use(router) //we are calling it as a middleware

 server.listen(PORT , () => console.log(`Server has Started on port ${PORT}`))
 
