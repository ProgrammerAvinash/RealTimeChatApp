import React,{useState} from 'react';
import { Link } from 'react-router-dom';    //this link is actually used to link to our chat ./chat path 
import './Join.css';
    export const Join = () => {
        const [name, setName] = useState('');
        const [room,setRoom] = useState('');
        return (
        <div className="joinOuterContainer">
        <div className="joinInnerContainer">
            <h1 className={'heading'}>Join</h1>
            <div><input type="text" className="joinInput" placeholder="Name" onChange={(e)=>setName(e.target.value)} /><div>
            </div><input type="text" className="joinInput" placeholder="Room" onChange={(e)=>setRoom(e.target.value)}    /></div>
            <Link  onClick={e => (!name || !room) ? e.preventDefault : null }to={`/chat?name=${name}&room=${room} `}>
                <button className="button mt-20" type="submit"> 
                    Sign In
                </button>
            </Link>
        </div>
        </div>
        );
    }
    export default Join