import React from "react"
import { graphql } from 'gatsby'

import "../styles/global.scss"
import { AboutMe } from "../components/aboutMe"
import { Header } from "../components/header"

type siteMetadataType = {
  data: {
    site: {
      siteMetadata: {
        author: {
          name: string
          summary: string
        }
        description: string
        social: {
          twitter: string
          instagram: string
        }
      }
    }
  }
}

export default ({ data }: siteMetadataType): JSX.Element => (
  <div>
    <div className="mainContainer">
      <Header />
      <div className="aboutMeSection">
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