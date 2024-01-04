import { useRef, useState } from "react"
import "./style.css"
import { useEffect } from "react"

import HiddenMovieCard from "../HiddenMovieCard"

export default function CatalogList({ list, title, updateHiddenCard, listComponentWidth, setListComponentWidth, setCardHover }) {
  const gap = 6
  const listRef = useRef()

  const [currentSlide, setCurrentSlide] = useState(0) // Posição atual do slide de filmes
  const [thumbsPerList, setThumbsPerList] = useState(calcThumbsPerList()) // Quantidade de thumbnail por visualização
  // const [listComponentWidth, setListComponentWidth] = useState(calcListComponentWidth()) // Largura da thumbnail
  const [numListPages, setNumListPages] = useState(Math.ceil(list.length/thumbsPerList)) // Número de listas listas


  function calcListComponentWidth() {
    let temp = calcThumbsPerList()
    return ((document.body.clientWidth - 2*50) - (temp + 1)*gap) / temp // Formula que define a largura de uma thumb
  }

  function calcThumbsPerList() {
    if(document.body.clientWidth <= 500) return 2
    if(document.body.clientWidth <= 800) return 3
    if(document.body.clientWidth <= 1100) return 4
    if(document.body.clientWidth <= 1400) return 5
    return 6
  }

  window.addEventListener("resize", () => {
    setThumbsPerList(calcThumbsPerList())
    setListComponentWidth(calcListComponentWidth())
  })

  function moveListLeft() {
    if(currentSlide > 0) setCurrentSlide(currentSlide - 1)
  }

  function moveListRight() {
    if(currentSlide < numListPages -1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(0)
    }
  }

  function updateHiddenCardPosition(e) {
    setHiddenCardPosition({
      x: e.target.getBoundingClientRect().x,
      y: e.target.getBoundingClientRect().y
    })
  }

  useEffect(()=>{
    // Scroll change currentSlide
    // 
    // listRef.current.addEventListener("wheel", (e)=>{
    //   console.log(e)
    // })
    setListComponentWidth(calcListComponentWidth())
  }, [])

  useEffect(()=>{ setNumListPages(Math.ceil(list.length/thumbsPerList)) }, [thumbsPerList])

  useEffect(()=>{
    let viewArea = document.body.clientWidth - 2*50 - gap
    listRef.current.scrollLeft = currentSlide * viewArea
  }, [currentSlide])

  return (
    <div className="list">
      {/* <HiddenMovieCard position={hiddenCardPosition} setHiddenCardPosition={setHiddenCardPosition}/> */}
      <h3 className="list-title container">{title}</h3>
      <div className="slide-container" style={{height: `${listComponentWidth * 9 / 16 }px`}}>
        <div className="slide-map">
          { 
            Array(numListPages).fill().map((_, index) => {
              return <span key={index} className={`slide-map-location ${index} ${(currentSlide == index) ? "current" : ""}`} ></span>
            })
          }
          
        </div>
        <button className={`arrow-left arrow ${(currentSlide == 0) ? "hidden" : 0}`} onClick={moveListLeft} ><i className="fa-solid fa-chevron-left"></i></button>
        <button className={`arrow-right arrow ${(currentSlide == numListPages -1) ? "hiddenp" : 0}`} onClick={moveListRight}><i className="fa-solid fa-chevron-right"></i></button>
        <div className="slide-content" ref={listRef}>
          <div className="list-spacer"></div>
          {list.map((e, index)=>{
            return (
              <div onMouseEnter={(e)=>setCardHover(e)} key={index} className="single-slide-movie hidden-movie-card-parent" style={{width:`${listComponentWidth}px`}}>
                <img src="/imgs/thumb-stranger-things.png"   style={{width:`${listComponentWidth}px`}} alt={e.key} />
                {/* <HiddenMovieCard /> */}
              </div>
            )
          })}
          <div className="list-spacer"></div>
        </div>

      </div>
    </div>
  )
}