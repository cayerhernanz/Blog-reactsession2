import React, { useState } from 'react';
import './_createarticle.scss';

const CreateArticle = (props) => {
    const { createNewArt } = props;
    const [newArt, setNewArt] = useState({
        author: "",
        title: "",
        body: "",
    });

    const handleSubmit = (event) => {
        event.preventDefautl();
        createNewArt(newArt);
        setNewArt({author: "", title: "", body: ""});
        console.log(newArt);
    };

const handleChange = (event) => {
    const {name, value} = event.target;
    setNewArt({...newArt, [name]: value})
}

  return (
    <div className='newarticle'>
        <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor='author'>Nom auteur: </label>
            <input type='text' name='author' id='author' onChange={(event => handleChange(event))}/>
            <br/>
            <label htmlFor='title'>Titre: </label>
            <input type='title' name='title' id='title' onChange={(event => handleChange(event))}/>
            <br/>
            <label htmlFor='body'>Description: </label>
            <input type='body' name='body' id='body' onChange={(event => handleChange(event))}/>
            <br/>
            <br/>
            <input type='submit' value='Envoyer'/>
        </form>
    </div>
  )
}

export default CreateArticle