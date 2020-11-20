import React from "react"
import "./Close.css"

export default ({ onClick, ...props }) => (
  <div
    {...props}
    className="close"
    style={{ ...props.style }}
    onClick={onClick}
  ></div>
)
