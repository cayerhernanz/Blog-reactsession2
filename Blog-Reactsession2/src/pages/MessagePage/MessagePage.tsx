import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import msgData from '../../data/data_messages.json';
import './_messagepage.scss';

const MessagePage = () => {
  const { id } = useParams();
  const [message, setMessage] = useState({});

  useEffect(() => {
    const findMsg = () => {
      const response = msgData.find((element) => element.id == id);
      setMessage(response);
    };
    findMsg();
  }, [])
  return (
    <div className='messagepage'>
      <h2>Message</h2>
      <div className='messagepage__message'>
        <div className='messagepage__message__field'>
          <h3>De la part de:</h3>
          <h3>{message.name}</h3>
        </div>
        <div className='messagepage__message__field'>
          <h3>Sujet:</h3>
          <h3>{message.subject}</h3>
        </div>
        <div className='messagepage__message__text'>
          <h3>Texte:</h3>
          <p>{message.content}</p>
        </div>
      </div>
    </div>
  )
}

export default MessagePage