import { useState, useEffect, useRef } from "react";
import "./style.css"

import HiddenMenu from "./HiddenMenu";
import HeaderNotification from "./HeaderNotification";
import HeaderProfileMenu from "./HeaderProfileMenu";
import NavMenu from "./NavMenu";

import { setCardVisibility } from "../../redux/Card/slice";

export default function Header() {
  const [searchInputState, setSearchInputState] = useState(false)
  
  const [pageTop, setPageTop] = useState(document.documentElement.scrollTop == 0)
  window.addEventListener("scroll", ()=>{
    
  })
  
  const [scrollTimeOut, setScrollTimeout] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if(!scrollTimeOut) {
        setPageTop(document.documentElement.scrollTop == 0)

        setScrollTimeout(true);
        setTimeout(() => {
          setScrollTimeout(false);
        }, 10);
      }
    };
    window.addEventListener("scroll", handleResize);
    return () => {window.removeEventListener("scroll", handleResize)}
  }, [scrollTimeOut]);

  useEffect(() => {}, [pageTop])

  return(
    <header className={(document.documentElement.scrollTop == 0) ? "top" : "dark" }>
      <div className="left">
        <div className="logo">
          <a href="/">
            <img src="/imgs/netflix-logo.png" alt="netflix" className="big-logo"/>
            <img src="/imgs/netflix-n-logo.png" alt="netflix" className="small-logo"/>
          </a>
        </div>
        <NavMenu />
      </div>
      <div className="right">
        <div className="search-section" onBlur={()=>setSearchInputState(false)}>
          <label htmlFor="input-search" className={searchInputState ? "" : ""}>
            <i className="fa-solid fa-magnifying-glass header-option" onClick={() => setSearchInputState(true)}></i>
          </label>
          <div className={`search-input ${searchInputState ? "opened" : ""}`} >
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="input-search" placeholder="Títulos, gente e gêneros"/>
          </div>
        </div>
        <div className="notifications-section relative parent-hidden-menu">
          <i className="fa-regular fa-bell header-option"></i>
          <HiddenMenu Component={HeaderNotification} />
        </div>
        <div className="profile-section relative parent-hidden-menu">
          <div className="account-button">
            <img src="/imgs/profile-pic.jpg" alt="" />
            <div className="arrow"></div>
          </div>
          <HiddenMenu Component={HeaderProfileMenu} />
        </div>
      </div>
    </header>
  )
}