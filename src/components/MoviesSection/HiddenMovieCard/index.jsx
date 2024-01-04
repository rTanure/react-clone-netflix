import "./style.css"

export default function HiddenMovieCard({ data, style, position, updateHiddenCard, cardWidth }) {
  return (
    <div onMouseLeave={()=>updateHiddenCard(false)} className={`hidden-movie-card ${style} ${position.class}`} style={{
      left: position.x,
      top: position.y,
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