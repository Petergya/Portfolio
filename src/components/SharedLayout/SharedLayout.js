import "./sharedLayout.scss"
import React from "react"
import Side from "../Side/Side"
import { Outlet } from "react-router-dom"
const index = () => {
  return (
    <div className="App">
      <Side />
      <div className="page">
        <span className="top-tags">&lt;html&gt;</span>
        <br />
        <span className=" top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default index
