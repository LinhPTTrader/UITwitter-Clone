import React, { useEffect, useState } from 'react'
import socket from '../utils/socket';
const Chat = () => {
    const [value, SetValue] = useState("")
    const user = JSON.parse(localStorage.getItem('profile'))
    const [message, setMessage] = useState([])
    useEffect(() => {
        socket.auth = {
            id: user._id
        }
        socket.connect()
        socket.on('chat', (arg) => {
            setMessage(state => [...state, arg.content])
        })
        return () => {
            socket.disconnect()
        }
    }, [])

    const HandleOnEnter = (e) => {
        if (e.keyCode === 13) {
            socket.emit('chat', {
                content: value,
                user_id: '6512973ef22356933d0fc703'
            })
            SetValue("")
        }
    }
    return (
        <div>
            {message.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <input value={value} onChange={(e) => SetValue(e.target.value)} onKeyUp={(e) => HandleOnEnter(e)} />
        </div>
    )
}

export default Chat