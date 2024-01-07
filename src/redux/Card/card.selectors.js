import { useSelector } from "react-redux"
import rootReducer from "../root-reducer"

const gap = 6

export const selectThumbsPerView = () => {
  console.log(document.body.clientWidth)
  if(document.body.clientWidth <= 500) return 2
  if(document.body.clientWidth <= 800) return 3
  if(document.body.clientWidth <= 1100) return 4
  if(document.body.clientWidth <= 1400) return 5
  return 6
}

export const selectThumbWidth = ()=> {
  let n = selectThumbsPerView()
  // Corrigir padding com 50%
  return ((document.body.clientWidth - 2*50) - (n + 1)*gap) / n
}