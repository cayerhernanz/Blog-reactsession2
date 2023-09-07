import React from 'react';
import SeeArticle from '../../Btn/SeeArticle/SeeArticle';
import ModArt from '../../Btn/ModArt/ModArt';
import "../_article.scss";

export default function ArticleBlog({id, title, body}){
    return(
            <div className='article__blog' key={id}>
                <div className='article__blog__image'></div>
                <div className='article__blog__content'>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
                <div className='article__blog__actions'>
                    <SeeArticle id={id}/>
                    <ModArt id={id}/>
                </div>
            </div>
    )
}