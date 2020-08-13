import React from 'react';
import './layout.css'
import './globall.css';
import './components.css'
import './wallpaper-sample.css'




function Header() {
    return (
        <header className="header">
        <div className="container">
          <h1 className="title">Mavel's Fearless</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
            molestias earum eveniet.
          </p>
          <div className="search-bar">
            <input type="search" placeholder="Search" />
          </div>
  
          
          <div className="sample-wallpaper">
        
            <article className="wallpaper">
              <img src="./img/venom-1.jpg" alt="Wallpaper #1" className="wallpaper" />
            </article>
  
        
            <article className="wallpaper">
              <img src="./img/hulk-1.jpg" alt="Wallpaper #1" className="wallpaper" />
            </article>
  
    
            <article className="wallpaper">
              <img src="./img/venom-2.jpg" alt="Wallpaper #1" className="wallpaper" />
            </article>
          </div>
        </div>
      </header>
    )
}

export default Header;