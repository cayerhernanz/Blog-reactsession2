import React from 'react';
import './_modart.scss';

const ModArt = (id) => {
  return (
    <a href={`/modify_article/${id}`} className='modart'>
        <p>Modifier</p>
    </a>
  )
}

export default ModArt