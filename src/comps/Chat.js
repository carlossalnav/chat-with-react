import React from 'react'
import SignOut from './SignOut'
import {useState, useEffect} from 'react';
import { db } from '../firebase';
import SendMessage from './SendMessage';

function Chat() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            <SignOut/>
            {messages.map(({id, text, photoURL}) =>(
                <div key = {id}>
                    <img src = {photoURL} alt = "profile photo"/>
                    <p>{text}</p>
                </div>
            ))}
            <SendMessage/>
        </div>
    )
}

export default Chat
