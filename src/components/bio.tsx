import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FixedObject } from "gatsby-image"

import { rhythm } from "../utils/typography"

// TODO: need to refactor types for components folder
type siteDataType = {
  avatar: {
    childImageSharp: {
      fixed: FixedObject,
    },
  },
  site: {
    siteMetadata: {
      author: {
        name: string;
        summary: string;
      },
      social: {
        twitter: string;
      },
    },
  },
};

export const Bio = (): JSX.Element => {
  const data: siteDataType = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
      {author.summary} <a href={`https://twitter.com/${social.twitter}`}>{author.name}</a>.
      <br/>
      Lets talk about the things i like.
      </p>
    </div>
  )
}
