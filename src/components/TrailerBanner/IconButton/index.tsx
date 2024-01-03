import React from "react"

import "./style.css"

export default function IconButton({Icon, content, className, action, style}) {
  return(
    <button className={`${className}`} onClick={action} style={style}>
      {Icon}
      <div className="content-box">{content}</div>
    </button>
  )
}