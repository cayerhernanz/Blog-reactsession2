import React from 'react';
import SeeMsg from '../Btn/SeeMsg/SeeMsg';
import './_message.scss';

export default function Message(props){
    return(
        <div className='message' key={props.id}>
            <div className='message__content'>
                <h3>{props.name}</h3>
                <h3>{props.subject}</h3>
                <p>{props.content}</p>
            </div>
            <SeeMsg id={props.id}/>
        </div>
    )
}
