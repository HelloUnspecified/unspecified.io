import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/shared/seo"
import ContentBlock from "../components/shared/contentBlock"

const LegalPageTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout fixedHeader>
      <SEO title={`Unspecified - ${frontmatter.title}`} />
      <ContentBlock>
        <div
          style={{ padding: "6rem 0" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ContentBlock>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
export default LegalPageTemplate
