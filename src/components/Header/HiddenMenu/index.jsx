import "./style.css"

export default function HiddenMenu({Component}) {
  return (
    <div className="hidden-menu">
      <span className="arrow"></span>
      <Component />
    </div>
  )
}