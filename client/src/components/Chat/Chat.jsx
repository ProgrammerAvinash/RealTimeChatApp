import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';  
import './Chat.css'
let socket ;

  const Chat = ( { location } ) => {
    const [name, setName] = useState('');
    const [room,setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';
   useEffect( () => {
        //Here we have to collect data Which user have Enter 
        const {name , room} = queryString.parse(location.search); //location actually comes from React Router and it gives the props & with this we actually get URL Bank
        console.log(name,room); 

        /*when we get the first connection ,
        we will set the socket equals io and we pass the endpoint ie localhost:5000*/

        socket = io(ENDPOINT)
        
        setName(name);
        setRoom(room);

        console.log(socket);
        socket.emit('join', { name , room }) //we will pass the string which is recognised by the backend
        
        
    }, [ENDPOINT , location.search])
    
        return (
        <div>
            <h1>Chat</h1>
        </div>
        );
    }
    export default Chat