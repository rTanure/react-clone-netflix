import { useEffect, useState } from "react"

import "./style.css"

import CatalogList from "./CatalogList"
import HiddenMovieCard from "./HiddenMovieCard"

export default function MoviesSection() {
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

  return(
    <section className="catalog">
      <HiddenMovieCard />
      <div className="catalog-box">
        <CatalogList list={list} title="Mais Assistidos" />
        <CatalogList list={list} title="Mais Assistidos" />
        <CatalogList list={list} title="Mais Assistidos" />
      </div>

    </section>
  )
}