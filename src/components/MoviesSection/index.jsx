import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import "./style.css"

import CatalogList from "./CatalogList"
import HiddenMovieCard from "./HiddenMovieCard"

import movies_data from "../../data/movies"

export default function MoviesSection() {
  const { cardVisibility } = useSelector(rootReducer => rootReducer.cardReducer)
  const [movieLists, setMovieLists] = useState([])


  const createList = () => {
    // const MAX = 10
    // const MIN = 5
    // const size = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

    const size = 25

    let list = []

    for(let c = 0; c < size; c++) {
      list.push(movies_data[Math.floor(Math.random() * (movies_data.length))])
    }
    return list
  }

  useEffect(()=>{
    const n = 10
    let list = []
    for(let c = 0; c < n; c++) {
      list.push(createList())
    }
    setMovieLists(list)
  }, [movies_data])
  
  return(
    <section className="catalog">
      { cardVisibility ? <HiddenMovieCard /> : null }
      <div className="catalog-box">
        {movieLists[0] ? <CatalogList list={movieLists[0]} title="Mais Assistidos" /> : null}
        {movieLists[1] ? <CatalogList list={movieLists[1]} title="Recomendados para você" /> : null}
        {movieLists[2] ? <CatalogList list={movieLists[2]} title="Premiados" /> : null}
        {movieLists[3] ? <CatalogList list={movieLists[3]} title="Clássico Atemporal" /> : null}
        {movieLists[4] ? <CatalogList list={movieLists[4]} title="Inovadores" /> : null}
        {movieLists[5] ? <CatalogList list={movieLists[5]} title="Suspenses" /> : null}
        {movieLists[6] ? <CatalogList list={movieLists[6]} title="Top hoje" /> : null}
        {movieLists[7] ? <CatalogList list={movieLists[7]} title="Populares em sua região" /> : null}
      </div>

    </section>
  )
}