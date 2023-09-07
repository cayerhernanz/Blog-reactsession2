import React, { useState } from 'react';
import './_createmessage.scss';

const CreateMessage = (props) => {
    const { createNewMsg } = props;
    const [newMsg, setNewMsg] = useState({
        name:"",
        subject:"",
        content:"",
    }) ;

    const handleSubmit = (event) => {
        event.preventDefault();
        createNewMsg(newMsg);
        setNewMsg({name: "", subject: "", content: ""})
        console.log(newMsg);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewMsg({...newMsg, [name]: value});
    }

  return (
    <div className='newmessage'>
        <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor='name'>Nom: </label>
            <input type='text' name='name' id='name' onChange={(event => handleChange(event))}/>
            <br/>
            <label htmlFor='subject'>Sujet: </label>
            <input type='text' name='subject' id='subject' onChange={(event => handleChange(event))}/>
            <br/>
            <label htmlFor='content'>Message: </label>
            <input type='text' name='content' id='content' onChange={(event => handleChange(event))}/>
            <br/>
            <br/>
            <input type='submit' value='Envoyer'/>
        </form>
    </div>
  )
}

export default CreateMessage