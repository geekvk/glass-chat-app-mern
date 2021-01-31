import React from 'react'
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';
function SidebarChat() {
    return (
        <div className="sidebarchat">
            <Avatar />
            <div className="sidebarchat__messageInfo">
            <h2> Title</h2>
            <p>Message</p>
            <p>timestamp</p>
            </div>
            
        </div>
    )
}

export default SidebarChat
