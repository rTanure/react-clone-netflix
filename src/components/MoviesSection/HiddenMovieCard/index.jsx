import "./style.css"
import { useSelector } from "react-redux"

export default function HiddenMovieCard({ data, style, position, updateHiddenCard, cardWidth }) {
  const { cardPosition, cardClass } = useSelector(rootReducer => rootReducer.cardReducer)

  return (
    <div onMouseLeave={()=>updateHiddenCard(false)} className={`hidden-movie-card ${style} ${cardClass}`} style={{
      left: cardPosition.x,
      top: cardPosition.y,
      width: `${cardWidth}px`
    }}>
      <div className="card-header">
        <img src="/imgs/thumb-peakyBlinders.jpg" alt="" />
      </div>
      <div className="card-content">

      </div>
    </div>
  )
}