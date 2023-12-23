import { useRef } from "react"
import "./style.css"
import { useEffect } from "react"

export default function TrailerBanner() {
  let videoRef = useRef(null)

  useEffect(()=>{
    // videoRef.current.muted = false
  }, [])


  return(
    <section className="trailer">
      <video src="./videos/trailer-peakyBlinders.mp4" autoPlay muted loop ref={videoRef}></video>
      <div className="banner">
        <h1>Peaky Blinders</h1>
      </div>

    </section>
  )
}