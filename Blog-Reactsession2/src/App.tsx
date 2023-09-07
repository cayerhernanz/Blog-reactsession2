import React from 'react';
import { Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import MessagePage from './pages/MessagePage/MessagePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import ModifyArtPage from './pages/ModifyArtPage/ModifyArtPage';


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/homepage' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/message/:id' element={<MessagePage/>}/>
        <Route path='/article/:id' element={<ArticlePage/>}/>
        <Route path='/modify_article/:id' element={<ModifyArtPage/>}/>
      </Routes>
    </>
  )
}

export default App
