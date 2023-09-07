import React from 'react';
import './_seearticle.scss';

export default function SeeArticle(id){
  return (
    <a href={`/article/${id}`} className='seearticle'>
        <p>Détail</p>
    </a>
  )
}
/* const SeeArticle = (props) => {
  const data = props;
  return (
    <a href={`/message/${id}`} className='seearticle'>
        <p>Voir</p>
    </a>
  )
}

export default SeeArticle */