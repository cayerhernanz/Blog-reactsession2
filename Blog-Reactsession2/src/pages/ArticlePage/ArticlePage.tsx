import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneArticle } from '../../services/articles';
import './_articlepage.scss';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const displayOneArticle = async() => {
      const response = await getOneArticle(id);
      setArticle(response);
      console.log(response);
    }
    displayOneArticle();
  }, []);

  return (
    <div className='articlepage'>
      <h2>Article</h2>
      <div className='articlepage__content'>
        <h3>{article.title}</h3>
        <div className='articlepage__content__body'>
          <p>{article.body}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage