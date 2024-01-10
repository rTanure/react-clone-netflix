// React
import { useEffect, useState } from "react"

// Cs
import "./style.css"

// Redux
import { setCardVisibility } from "../../../redux/Card/slice"
import { useSelector, useDispatch } from "react-redux"

export default function HiddenMovieCard({ data, style }) {
  const { cardPosition, cardState, thumbWidth, cardVisibility } = useSelector(rootReducer => rootReducer.cardReducer)
  const dispatch = useDispatch() 

  // Width variável sem alterar a root
  const [ width, setWidth ] = useState(thumbWidth)
  const [ altClass, setAltClass ] = useState("")

  useEffect(()=>{
    console.log(thumbWidth)
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
        <h1>Título da serie</h1>
      </div>
    </div>
  )
}