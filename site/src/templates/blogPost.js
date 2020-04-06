import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/shared/seo"
import Layout from "../components/layout"

const ContentBlock = styled.div`
  margin: 6rem auto;
  max-width: 100rem;
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post

  console.log("post", post)
  return (
    <Layout>
      <SEO title={`Unspecified - ${post.title}`} />
      <ContentBlock>
        <h1>{post.title}</h1>
        <p>{post.person.name}</p>
        <p>{post.publishedAt}</p>
        <ul>
          {post.categories.map(category => (
            <li key={category._id}>{category.title}</li>
          ))}
        </ul>
        {/* <p>{post.bodyRaw}</p> */}
      </ContentBlock>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        asset {
          url
        }
      }
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
      slug {
        current
      }
      person {
        name
      }
    }
  }
`
