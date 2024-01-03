import { useState } from "react"
import "./style.css"

import HiddenMenu from "../HiddenMenu";

export default function NavMenu() {
  const [viewWidth, setViewWidth] = useState(window.visualViewport.width)

  window.addEventListener("resize", ()=>{
    setViewWidth(window.visualViewport.width)
  })
  
  if(viewWidth > 1000) {
    return (
      <nav className="menu-big">
        <ul>
          <li><a href="#" className="atual">Início</a></li>
          <li><a href="#">Séries</a></li>
          <li><a href="#">Filmes</a></li>
          <li><a href="#">Bombando</a></li>
          <li><a href="#">Minha Lista</a></li>
        </ul>
      </nav>
    )
  }

  if(viewWidth > 425) {
    return (
      <nav className="menu-medium parent-hidden-menu">
        <p>Navegar <span className="arrow"></span></p>
        <div className="nav-opened-menu-container">
          <HiddenMenu Component={()=>{
            return(
              <ul>
                <li><a href="#" className="atual">Início</a></li>
                <li><a href="#">Séries</a></li>
                <li><a href="#">Filmes</a></li>
                <li><a href="#">Bombando</a></li>
                <li><a href="#">Minha Lista</a></li>
              </ul>
            )
          }}/>
        </div>
        
      </nav>
    )
  }

  if(viewWidth > 0) {
    return (
      <nav className="menu-medium parent-hidden-menu">
        <p> <span className="arrow"></span></p>
        <div className="nav-opened-menu-container">
          <HiddenMenu Component={()=>{
            return(
              <ul>
                <li><a href="#" className="atual">Início</a></li>
                <li><a href="#">Séries</a></li>
                <li><a href="#">Filmes</a></li>
                <li><a href="#">Bombando</a></li>
                <li><a href="#">Minha Lista</a></li>
              </ul>
            )
          }}/>
        </div>
        
      </nav>
    )
  }

  
}