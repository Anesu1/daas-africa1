// Step 1: Import React
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    siteBuildMetadata {
      buildTime
    }
  }
`)

  return (
    <main>
      <title>Home Page</title>
      <h1>{ data.site.siteMetadata.title }</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage