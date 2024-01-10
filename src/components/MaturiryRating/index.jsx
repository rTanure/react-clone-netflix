import "./style.css"

export default function MaturityRating({ age }) {
  return (
    <span className="maturity-rating"><p>{age}</p></span>
  )
}