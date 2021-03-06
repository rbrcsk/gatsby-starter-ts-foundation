import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query AboutPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`

const AboutPageTemplate = ({
  data,
}: PageProps<GatsbyTypes.AboutPageTemplateQuery>): JSX.Element | null => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark ?? {}

  if (!frontmatter || !html || !excerpt) {
    return null
  }

  return (
    <Layout page narrow>
      <SEO title={frontmatter.title} description={excerpt} />
      <h1>{frontmatter.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default AboutPageTemplate
