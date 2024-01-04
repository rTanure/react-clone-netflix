import "./style.css"

export default function HiddenMovieCard({ data, style }) {
  return (
    <div className={`hidden-movie-card ${style}`}>
      <div className="card-header">
        <img src="/imgs/thumb-stranger-things.png" alt="" />
      </div>
      <div className="card-content">

      </div>
    </div>
  )
}