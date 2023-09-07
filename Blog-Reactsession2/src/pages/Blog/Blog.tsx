import React, { useEffect, useState } from 'react';
import { getAllArticles } from "../../services/articles";
import ArticleBlog from '../../components/Article/articleBlog/ArticleBlog';
import CreateArticle from '../../components/Forms/CreateArticle/CreateArticle';
import './_blog.scss';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const displayAllArticles = async() => {
      const response = await getAllArticles();
      setArticles(response);
      console.log(response);
    }
    displayAllArticles();
  }, []);

  const saveArticle = (data) =>{
    const copy =[...articles];
    copy.push(data);
    console.log(copy);
  };

  return (
    <div className='blog'>
      <div className='blog__box'>
        <h2>Tout les articles du plus récent au plus ancien</h2>
        <div className='blog__box__list'>
          {articles.map(data => (
            <ArticleBlog key={data.id} id={data.id} title={data.title} body={data.body}/>
          ))}

        </div>
      </div>
      <div className='blog__form'>
        <CreateArticle createNewArt={saveArticle}/>
      </div>
    </div>
  )
}

export default Blog