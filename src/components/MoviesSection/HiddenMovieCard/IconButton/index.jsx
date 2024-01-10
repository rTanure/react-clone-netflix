import "./style.css"

export default function IconButton({ type, iconClass, action, className }) {
  return (
    <button className={`icon-button ${className}`}>
      <i className={iconClass}></i>
    </button>
  )
}