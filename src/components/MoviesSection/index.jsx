import { useEffect, useState } from "react"

import "./style.css"

import CatalogList from "./CatalogList"
import HiddenMovieCard from "./HiddenMovieCard"

export default function MoviesSection() {
  const [listComponentWidth, setListComponentWidth] = useState() // Largura da thumbnail
  const [hiddenCardPosition, setHiddenCardPosition] = useState({
    x: 0,
    y: 0,
    class: "closed"
  })
  const [cardHover, setCardHover] = useState(false)

  let list = []
  let template = {
    title: "",
  }
  function populateList(list, qtd, template) {
    for(let c = 0; c < qtd; c++) {
      let copy = {...template}
      copy.key = c
      list.push(copy)
    }
  }
  populateList(list, 20, template)


  
  
  function updateHiddenCard(value) {
    if(!value) {
      setHiddenCardPosition({
        x: 0,
        y: 0,
        class: "closed"
      })
    } else {
      setTimeout(() => {
        setHiddenCardPosition({
          x: value.getBoundingClientRect().left,
          y: distTop(value),
          class: "opening"
        })
      }, 1000);
    }
  }

  useEffect(()=>{
    updateHiddenCard(cardHover)
  }, [cardHover])

  return(
    <section className="catalog">
      <HiddenMovieCard 
        setCardHover={setCardHover} 
        cardHover={cardHover} 
        cardWidth={listComponentWidth} 
        position={hiddenCardPosition} 
        listComponentWidth={listComponentWidth} 
        updateHiddenCard={updateHiddenCard} 
        onmouseout={()=>{console.log("kjasdnkajn")}} 
      />
      <div className="catalog-box">
        <CatalogList 
          setListComponentWidth={setListComponentWidth} 
          listComponentWidth={listComponentWidth} 
          updateHiddenCard={updateHiddenCard} 
          list={list} 
          title="Mais Assistidos"
        />
        <CatalogList 
          setListComponentWidth={setListComponentWidth} 
          listComponentWidth={listComponentWidth} 
          updateHiddenCard={updateHiddenCard} 
          list={list} 
          title="Mais Assistidos"
        />
        <CatalogList 
          setListComponentWidth={setListComponentWidth} 
          listComponentWidth={listComponentWidth} 
          updateHiddenCard={updateHiddenCard} 
          list={list} 
          title="Mais Assistidos"
        />
      </div>

    </section>
  )
}