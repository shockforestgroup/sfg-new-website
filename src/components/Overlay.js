import React from "react"
import { navigate } from "gatsby"

export default ({ children, onClose }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        backgroundColor: "white",
        top: "40px",
        left: "100px",
        right: "100px",
        bottom: "40px",
        padding: "40px",
        opacity: "0.8",
      }}
    >
      {children}
      <button
        style={{
          position: "absolute",
          right: "20px",
          top: "20px",
          fontSize: 40,
          cursor: "pointer",
        }}
        onClick={() => {
          onClose ? onClose() : navigate("/")
        }}
      >
        X
      </button>
    </div>
  )
}
