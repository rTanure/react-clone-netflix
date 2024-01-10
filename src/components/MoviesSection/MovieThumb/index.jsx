import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import "./style.css"

import { displayCard, setCardPosition, setCardVisibility, setMovie } from "../../../redux/Card/slice"

export default function MovieThumb({movie}) {
  const {thumbWidth} = useSelector(rootReducer => rootReducer.cardReducer)
  const dispatch = useDispatch()
  
  const timeoutRef = useRef(null)

  function distanceTop(el) {
    var distancia = 0;
    while(el) {
        distancia += el.offsetTop;
        el = el.offsetParent;
    }
    distancia = distancia + thumbWidth * 9/32
    return distancia +3;
  }
  function distanceLeft(el) { return el.getBoundingClientRect().left  + thumbWidth /2; }

  const handleMouseEnter = (e) => {
    const cardCoords = {
      x: distanceLeft(e.target),
      y: distanceTop(e.target),
    }
    timeoutRef.current = setTimeout(()=>{
      dispatch(setCardVisibility(true))
      dispatch(setCardPosition(cardCoords))
      dispatch(setMovie(movie))
    }, 600)
    
  }

  const handleMouseLeave = (e) => {
    clearTimeout(timeoutRef.current)
  }

  return(
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className="movie-thumb" 
      style={{width:`${thumbWidth}px`}}
    >
      <img src={movie.thumb} style={{width:`${thumbWidth}px`}} alt="" />
    </div>
  )
}