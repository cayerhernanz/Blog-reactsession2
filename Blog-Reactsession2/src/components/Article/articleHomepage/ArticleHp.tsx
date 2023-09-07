import React from 'react';
import "../_article.scss"

export default function ArticleHp({id, title, body}){
    return(
    <a  href={`/article/${id}`} className="article__homepage" key={id}>
        <div className='article__homepage__image'></div>
        <div className='article__homepage__content'>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    </a>
    )
}