import React, { useState, useEffect } from 'react';
import ChatBox from './ChatBox';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [showData, setShowData] = useState([]); // Initialize showData as a state variable

  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  const handleAddMessage = (newMessage) => {
    if(newMessage===""){
      return;
    }
    setMessages([...messages, newMessage]);
    const obj = {
      user: user_list[Math.floor(Math.random() * user_list.length)],
      messages: newMessage
    };

    setShowData([...showData, obj]); // Append the new object to showData
    console.log(showData)
  };

  useEffect(() => {
    // Add any additional logic you need to perform when showData changes
  }, [showData]);

  return (
    <div style={{ height: "650px", width: "700px", border: "2px solid black", backgroundColor: "lightgray", borderRadius: "5px", marginTop: "10px" }}>
      <div className='all-chats' style={{ height: "590px", width: "680px", marginLeft: "10px", marginTop: "2px",  }}>
        <h2>Messages</h2>
        <div style={{overflowY:"scroll", height:"520px"}}>
        {showData.map((obj) => (
          <div key={obj.messages} style={{}}>
            <strong>{obj.user}:</strong> {obj.messages}
            <hr />
          </div>
         
        ))}
        </div>
      </div>
      <ChatBox onSendMessage={handleAddMessage} />
    </div>
  );
}
