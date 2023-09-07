import React from 'react';
import "./_seemsg.scss";

export default function SeeMsg(id){
  return (
    <a href={`/message/${id}`} className='seemsg'>
        <p>Voir</p>
    </a>
  )

}
/* const SeeMsg = (props) => {
  const data = props;
  return (
    <a href={`/message/${id}`} className='seemsg'>
        <p>Voir</p>
    </a>
  )
}

export default SeeMsg */