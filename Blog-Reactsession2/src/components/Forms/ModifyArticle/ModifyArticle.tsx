import React, { useState } from 'react';
import './_modyfyarticle.scss';

const ModifyArticle = (props) => {
    const { modifyArt, id, title, body } = props;
    const [art, setArt] = useState({
        author: "",
        title: "",
        body: "",
    });

    const handleSubmit = (event) => {
        event.preventDefautl();
        modifyArt(art);
        setArt({author: "", title: "", body: ""});
        console.log(art);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setArt({...art, [name]: value})
    }

  return (
    <div className='modifyarticle' key={id}>
        <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor='author'>Nom auteur: </label>
            <input type='text' name='author' id='author' onChange={(event => handleChange(event))}/>
            <br/>
            <label htmlFor='title'>Titre: </label>
            <input type='title' name='title' id='title' value={title} onChange={(event => handleChange(event))}/>
            <br/>
            <label htmlFor='body'>Description: </label>
            <input type='body' name='body' id='body' value={body} onChange={(event => handleChange(event))}/>
            <br/>
            <br/>
            <input type='submit' value='Modifier'/>
        </form>
    </div>
  )
}

export default ModifyArticle