import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

// TODO: todo goes into dedicated files
type notFoundPageProptypes = {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: string;
};

const NotFoundPage = ({ data, location }: notFoundPageProptypes): JSX.Element => {
  const siteTitle: string = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery: void = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
