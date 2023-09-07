import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneArticle, updateOneArticle } from '../../services/articles';
import ModifyArticle from '../../components/Forms/ModifyArticle/ModifyArticle';

const ModifyArtPage = () => {
    //Affichage
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

    //Formulaire
    const updateArticle = async() =>{
        const response = await updateOneArticle(id);
        setArticle(response);
        console.log(response);
    }
    
  return (
    <div className='modifyartpage'>
        <ModifyArticle id={article.id} title={article.title} body={article.body} modifyArt={updateArticle}/>
    </div>
  )
}

export default ModifyArtPage