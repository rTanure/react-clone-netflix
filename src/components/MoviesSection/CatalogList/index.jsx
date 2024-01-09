import { useRef, useState, useEffect } from "react"
import "./style.css"
import { useDispatch, useSelector } from "react-redux"
import { displayCard, updateView } from "../../../redux/Card/slice"

export default function CatalogList({ list, title, updateHiddenCard, setCardHover }) {
  
  const {thumbWidth, numberOfViews, gap} = useSelector(rootReducer => rootReducer.cardReducer)
  const listRef = useRef()
  
  const [currentSlide, setCurrentSlide] = useState(0)
  
  useEffect(()=>{
    let viewArea = document.body.clientWidth - 2*(document.body.clientWidth*0.05) - gap
    listRef.current.scrollLeft = currentSlide * viewArea
  }, [currentSlide, thumbWidth])
  
    // Revisado \/
  const dispatch = useDispatch()


  function moveListLeft() {
    if(currentSlide > 0) setCurrentSlide(currentSlide - 1)
  }
  
  function moveListRight() {
    if(currentSlide < numberOfViews -1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(0)
    }
  }
  

  function distanceTop(el) {
    var distancia = 0;
    while(el) {
        distancia += el.offsetTop;
        el = el.offsetParent;
    }
    distancia = distancia + thumbWidth * 9/32
    return distancia;
  }
  function distanceLeft(el) {
    var distancia = 0;
    distancia = el.getBoundingClientRect().left  + thumbWidth /2
    return distancia;
  }

  function handleThumbMouseIn(e) {
    const coords = {
      x: distanceLeft(e.target),
      y: distanceTop(e.target),
    }
    setTimeout(()=>{
      dispatch(displayCard(coords))
    }, 1000)
  }
  
  function calculate() {
  }

  // Controle do resize da tela
  const [resizeTimeout, setResizeTimeout] = useState(false)
  useEffect(() => {
    dispatch(updateView(list.length))
    const handleResize = () => {
      if(!resizeTimeout) {
        dispatch(updateView(list.length))
        setResizeTimeout(true);
        setTimeout(() => {
          setResizeTimeout(false);
        }, 10);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {window.removeEventListener("resize", handleResize)}
  }, [resizeTimeout]);

  
  
  return (
    <div className="list">
      <h3 className="list-title container">{title}</h3>
      <div className="slide-container" style={{height: `${thumbWidth * 9 / 16 }px`}}>
        <div className="slide-map">
          { 
            Array(numberOfViews).fill().map((_, index) => {
              return <span key={index} className={`slide-map-location ${index} ${(currentSlide == index) ? "current" : ""}`} ></span>
            })
          }
          
        </div>
        <button className={`arrow-left arrow ${(currentSlide == 0) ? "hidden" : 0}`} onClick={moveListLeft} ><i className="fa-solid fa-chevron-left"></i></button>
        <button className={`arrow-right arrow ${(currentSlide == numberOfViews -1) ? "hiddenp" : 0}`} onClick={moveListRight}><i className="fa-solid fa-chevron-right"></i></button>
        <div className="slide-content" ref={listRef}>
          <div className="list-spacer"></div>
          {list.map((e, index)=>{
            return (
              <div onMouseEnter={(e)=>handleThumbMouseIn(e)} key={index} className="single-slide-movie hidden-movie-card-parent" style={{width:`${thumbWidth}px`}}>
                <img src="/imgs/thumb-stranger-things.png"   style={{width:`${thumbWidth}px`}} alt={e.key} />
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