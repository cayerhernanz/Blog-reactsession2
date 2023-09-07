import React, { useEffect, useState } from 'react'
import Message from '../../components/Message/Message';
import { getLastArticle } from '../../services/articles';
import CreateMessage from '../../components/Forms/CreateMessage/CreateMessage';
import "./_home.scss";
import ArticleHp from '../../components/Article/articleHomepage/ArticleHp';

//importation du json de données
import msgData from '../../data/data_messages.json';

const Home = () => {
    //Messages
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const displayAllMsg = () => {    
            setMessages(msgData);
        }
        displayAllMsg();
    }, []);

    const saveMsg = (data) => {
        const copy = [...messages];
        copy.push(data);
        setMessages(copy)
    }


    //Article
    const [article, setArticle] = useState([]);

    useEffect(() => {
        const displayLastArticle = async() => {
            const response = await getLastArticle();
            setArticle(response);
            console.log(response);
        }
        displayLastArticle();
    }, []);

    return (
        <div className='home'>Home
            <div className='home__messages'>
                <h2>Boite de réception des messages</h2>
                <div className='home__messages__box'>
                    <div className='home__messages__box__list'>
                        {msgData.map(data => {
                            console.log(data.id)
                            return(
                                <Message key={data.id} name={data.name} subject={data.subject} content={data.content}/>
                            )
                        })}
                    </div>
                    <div className='home__messages__box__form'>
                        <h2>Nous contacter</h2>
                        <CreateMessage createNewMsg={saveMsg}/>
                    </div>
                </div>
            </div>

            <div className='home__lastArticle'>
                <ArticleHp key={article.id} id={article.id} title={article.title} body={article.body}/>
            </div>
            
        </div>
  )
}

export default Home