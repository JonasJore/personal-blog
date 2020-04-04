import React from "react"
import { Link } from "gatsby"

import "../styles/main.scss"

export default (): JSX.Element => (
  <div>
    Hello world!<br/>
    <Link to="/about/">about</Link>
  </div>
)
