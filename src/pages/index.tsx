import React from "react"
import { Link } from "gatsby"

import "../styles/global.scss"
import { AboutMe } from "../components/aboutMe"

export default (): JSX.Element => (
  <div>
    <div className="mainContainer">
      <div className="header">
        
      </div>
      <div className="aboutMe">
        <AboutMe />
      </div>
    </div>
  </div>
)
