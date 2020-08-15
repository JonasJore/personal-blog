import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import "./layout.scss"

// TODO: please rearrange types soon
type layoutProptypes = {
  location: any;
  title: string;
  children: any;
};

export const Layout = ({ location, title, children }: layoutProptypes): JSX.Element => {
  // @ts-ignore
  const rootPath: string = `${__PATH_PREFIX__}/`
  
  let header: JSX.Element

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          className="blog-layout-header"
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link 
          className="blog-post-header-link"
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer 
        className="blog-footer"
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}
