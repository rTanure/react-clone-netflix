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
  const { cardPosition, thumbWidth, cardVisibility, movie } = useSelector(rootReducer => rootReducer.cardReducer)
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
        <img src={movie.thumb} alt="" />
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
          <p>{movie.relevance}% relevante</p>
        </div>
        <div className="card-content-infos">
          <MaturityRating age={movie.age_restriction} />
          <div className="duration">
            {(movie.type == "movie") ? (<p>{Math.floor(movie.duration / 60)}h {movie.duration % 60}min</p>) : (<p>{movie.num_episodes} episódios</p>)}
            
          </div>
          <span className="quality">HD</span>
          <SpacialAudio style={{width: "80px"}} />
        </div>
        <div className="card-content-categories">
          <p>{movie.category[0]}</p>
          <span className="divider"></span>
          <p>{movie.category[1]}</p>
          <span className="divider"></span>
          <p>{movie.category[2]}</p>
        </div>
      </div>
    </div>
  )
}