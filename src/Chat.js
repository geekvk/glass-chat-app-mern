import { Avatar, IconButton } from '@material-ui/core';
import React, { useState } from 'react'
import "./Chat.css";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import MicIcon from '@material-ui/icons/Mic';
import axios from "./axios";
function Chat({ messages }) {
    const[input, setInput] = useState("");
    const sendMessage = async(e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            message: input,
            name: "Vijan & Chathu",
            timestamp: "String",
            received: false
        });
        setInput('');
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3> Room Name</h3>
                    <p>Last seen </p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    

                </div>

            </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}> 
                    <span className="chat__name"> {message.name} </span>
                        {message.message}
                    <span className="chat__timestamp">
                        { message.timestamp }
                    </span>
                </p>
                    
                ))}
                    
                    <p className="chat__message"> 
                        <span className="chat__name"> Vijan </span>

                        This is a message 
                        <span className="chat__timestamp">
                            { new Date().toUTCString() }
                        </span>
                    </p>
                    <p className="chat__message chat__receiver"> 
                        <span className="chat__name"> Vijan </span>

                        This is a message 
                        <span className="chat__timestamp">
                            { new Date().toUTCString() }
                        </span>
                    </p>
            </div>
            <div className="chat__footer">
                <IconButton>
                    <SentimentSatisfiedOutlinedIcon />
                </IconButton>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}  placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit"> Send a message </button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default Chat
