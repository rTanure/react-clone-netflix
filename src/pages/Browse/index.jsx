import Header from "../../components/Header"
import TrailerBanner from "../../components/TrailerBanner"
import MoviesSection from "../../components/MoviesSection"
import Footer from "../../components/Footer"

export default function Browse() {
  document.title = "Início - Netflix"
  return(
    <>
      <Header />
      <TrailerBanner />
      <MoviesSection />
      <Footer />
    </>
  )
}