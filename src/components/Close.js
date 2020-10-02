import React from "react"
import "./Close.css"

export default ({ onClick, ...props }) => (
  <div
    {...props}
    class="close"
    style={{ ...props.style, color: "red" }}
    onClick={onClick}
  ></div>
)
