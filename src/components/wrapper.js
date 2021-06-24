import React from "react"
import "./style.css"

import Dispatches from "./dispatches"
import StateIndicators from "./states"

function Wrapper() {
  return (
    <div className="wrapper">
      <Dispatches />
      <StateIndicators />
    </div>
  )
}

export default Wrapper
