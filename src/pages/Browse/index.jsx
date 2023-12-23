import Header from "../../components/Header"
import TrailerBanner from "../../components/TrailerBanner"


export default function Browse() {
  document.title = "Início - Netflix"
  return(
    <>
      <Header />
      <TrailerBanner />
    </>
  )
}