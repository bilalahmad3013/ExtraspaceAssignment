import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import EmojiPicker from 'emoji-picker-react';






export default function ChatBox({ onSendMessage }) {
    const [msg, setMsg] = useState("");
    const [emoojee, setEmoojee] = useState("false");

    function handleEmoojee() {
        setEmoojee(!emoojee);
    }

    const handleEmojeeSelect = (event) => {
        let message = msg;
        message += event.emoji;
        setMsg(message);
    }
    

    function handleBtnClick() {
        onSendMessage(msg); // Send the message to the parent component
        setMsg(""); // Clear the input field after sending the message
      }
    return (
        <div style={{ display: 'flex', marginTop: "-2%", padding: "5px", width: "100%" }}>

            <div>
                <input type="text" placeholder='Write your message here' style={{ height: "30px", width: "550px", padding: "4px", borderRadius: "10px", marginRight: "100px" }} value={msg} onChange={(e) => { setMsg(e.target.value) }} />

            </div>

            <div style={{ marginTop: "5px", marginLeft: "570px", position: "absolute", cursor: "pointer" }} >
                <FontAwesomeIcon icon={faFaceSmile} size='2x' onClick={handleEmoojee} />
                {
                    !emoojee && <div style={{ position: "absolute", top: "-360px", left: "0px" }} ><EmojiPicker height={350} width={300} size="25" sheetSize={32}
                        emojiSize={24} onEmojiClick={handleEmojeeSelect} /> </div>
                }
            </div>

            <div style={{ position: "absolute", marginLeft: "610px", marginTop: "3px" }}>
                <button style={{ height: "35px", width: "80px", borderRadius: "5px" }} onClick={handleBtnClick}>
                    Send
                </button>
            </div>



        </div>
    )
}
