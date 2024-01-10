import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import "./style.css"

import { setCardPosition, setCardVisibility } from "../../../redux/Card/slice"

export default function MovieThumb() {
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
    }, 1000)
    
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
      <img src="/imgs/thumb-peakyBlinders.jpg" style={{width:`${thumbWidth}px`}} alt="" />
    </div>
  )
}