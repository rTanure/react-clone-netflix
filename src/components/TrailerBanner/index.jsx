import "./style.css"

import Top10Icon from "../../svg/Top10Icon"
import MaturityRatingIcon from "../../svg/MaturityRatingIcon"
import IconButton from "./IconButton"
import { useEffect, useState } from "react"

export default function TrailerBanner() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(()=>{
    setWindowWidth(window.innerWidth);
  }, [document.innerWidth])

  return(
    <section className="trailer">
      <video src="./videos/trailer-peakyBlinders.mp4" autoPlay muted loop></video>
      <div className="banner container">
        <div className="content">

          <div className="banner-logo">
            <img src="./imgs/peaky-blinders-logo.png" alt="peaky blinders" />
          </div>

          <div className="banner-classification">
            <Top10Icon />
            <span>Top 1 em filmes hoje</span>
          </div>

          <div className="banner-description">  
            <p>Uma notória gangue da Inglaterra de 1919 ascende no submundo liderada pelo cruel Tommy Shelby, um criminoso disposto a subir na vida a qualquer preço.</p>
          </div>

          <div className="banner-buttons">
              <IconButton Icon={(<i className="fa-solid fa-play"></i>)} content="Assistir" action={()=>alert("Assistir")}/>
              <IconButton Icon={(<i className="fa-solid fa-info"></i>)} content="Mais informações" action={()=>alert("Mais informações")} className="secondary"/>
          </div>

          <div className="banner-age-classification">
            <MaturityRatingIcon />
          </div>
        </div>
        <div className="blur">

        </div>
        
      </div>

    </section>
  )
}