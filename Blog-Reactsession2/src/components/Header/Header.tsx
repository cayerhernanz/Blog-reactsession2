import React from 'react';
import { Link } from 'react-router-dom';
import "./_header.scss";

const Header = () => {
    //récupération de la page active
    const currentPage = window.location.pathname;

  return (
    <div className='header'>
        <nav>
            <Link to='/homepage' className={currentPage === '/homepage' ? 'link_page_active' : 'link_ page'}>Accueil</Link>
            <Link to='/blog' className={currentPage === '/blog' ? 'link_page_active' : 'link_ page'}>Blog</Link>
        </nav>
    </div>
  )
}

export default Header