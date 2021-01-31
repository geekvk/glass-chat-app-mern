import './App.css';
import SideBar from "./SideBar";
import Chat from "./Chat";
import { useEffect, useState } from 'react';
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  const[messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync")
          .then(response => {
            setMessages(response.data);
          });
  }, []);
  console.log(messages);

  useEffect(() => {
    // when app is loaded run this function once until input changes
    const pusher = new Pusher('99de671442265d3218ad', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });
     return () => {
      channel.unbind_all();
      channel.unsubscribe();

    }
  }, [messages]);
  return (
    <div className="App">
          <div className="app__body">
              <SideBar />
              <Chat  messages={messages} />
          </div>
    </div>
  );
}

export default App;
