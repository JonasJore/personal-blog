import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import "../styles/global.scss"
import { AboutMe } from "../components/aboutMe"

export default ({ data }: any): JSX.Element => (
  <div>
    <div className="mainContainer">
      <div className="header">
        
      </div>
      <div className="aboutMe">
        <AboutMe 
          name={data.site.siteMetadata.author.name}
          description={data.site.siteMetadata.description}
          twitterHandle={data.site.siteMetadata.social.twitter}
        />
      </div>
    </div>
  </div>
)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        description
        social {
          twitter
          instagram
        }
      }
    }
  }
`