// React
import { useEffect, useState } from "react"

// Cs
import "./style.css"

// Redux
import { setCardVisibility } from "../../../redux/Card/slice"
import { useSelector, useDispatch } from "react-redux"
import IconButton from "./IconButton"
import MaturityRating from "../../MaturiryRating"
import SpacialAudio from "../../../svg/SpacialAudio"

export default function HiddenMovieCard({ data, style }) {
  const { cardPosition, thumbWidth, cardVisibility } = useSelector(rootReducer => rootReducer.cardReducer)
  const dispatch = useDispatch() 

  // Width variável sem alterar a root
  const [ width, setWidth ] = useState(thumbWidth)
  const [ altClass, setAltClass ] = useState("")

  useEffect(()=>{
    if(cardVisibility === false) setWidth(thumbWidth) // estado inicial
    // if(cardVisibility === true) setWidth(400) // estado final
  }, [thumbWidth, cardVisibility])

  // Mouse saiu do card flutuante
  function handleMouseLeave(e) {
    setAltClass("closing")
    setTimeout(() => {
      dispatch(setCardVisibility(false))
      setAltClass("")
    }, 300);
  }

  return (
    <div 
      onMouseLeave={handleMouseLeave} 
      className={`hidden-movie-card ${cardVisibility ? "" : "hidden"} ${ altClass }`} 
      style={{
        left: cardPosition.x,
        top: cardPosition.y,
        width: `${width}px`
      }}
    >
      <div className="card-header">
        <img src="/imgs/thumb-peakyBlinders.jpg" alt="" />
      </div>
      <div className="card-content">
        <div className="card-content-header">
          <div className="left">
            <IconButton iconClass="fa-solid fa-play" className="white"/>
            <IconButton iconClass="fa-solid fa-plus" className=""/>
            <IconButton iconClass="fa-solid fa-thumbs-up" className=""/>
          </div>
          <div className="right">
            <IconButton iconClass="fa-solid fa-chevron-down" className=""/>
          </div>
        </div>
        <div className="card-content-relevance">
          <p>93% relevante</p>
        </div>
        <div className="card-content-infos">
          <MaturityRating age={10} />
          <div className="duration">
            <p>2h 15min</p>
          </div>
          <span className="quality">HD</span>
          <SpacialAudio style={{width: "80px"}} />
        </div>
        <div className="card-content-categories">
          <span className="divider"></span>
          <p>Empolgantes</p>
          <span className="divider"></span>
          <p>Reino Escondido</p>
          <span className="divider"></span>
          <p>Mundo épico</p>
        </div>
      </div>
    </div>
  )
}