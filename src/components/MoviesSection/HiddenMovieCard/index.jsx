import { useEffect, useState } from "react"
import { closeCard } from "../../../redux/Card/slice"
import "./style.css"
import { useSelector, useDispatch } from "react-redux"

export default function HiddenMovieCard({ data, style, position, updateHiddenCard, cardWidth }) {
  const { cardPosition, cardState, thumbWidth } = useSelector(rootReducer => rootReducer.cardReducer)
  const [ width, setWidth ] = useState(thumbWidth)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(cardState === "closed") setWidth(thumbWidth)
    if(cardState === "opened") setWidth(350)
  }, [thumbWidth, cardState])

  function handleMouseLeave(e) {
    dispatch(closeCard())
  }

  return (
    <div onMouseLeave={()=>handleMouseLeave()} className={`hidden-movie-card ${style} ${cardState}`} style={{
      left: cardPosition.x,
      top: cardPosition.y,
      width: `${width}px`
    }}>
      <div className="card-header">
        <img src="/imgs/thumb-stranger-things.png" alt="" />
      </div>
      <div className="card-content">
        <h1>Título da serie</h1>
      </div>
    </div>
  )
}