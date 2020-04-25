import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ContentBlock from "../components/shared/contentBlock"
import ReactMarkdown from "react-markdown"
import SEO from "../components/shared/seo"
import Layout from "../components/layout"
import moment from "moment"
import { colors } from "../utilities"

const CategoryList = styled.ul`
  list-style-type: none;
  margin: 0;
`

const Category = styled.li`
  background-color: ${colors.linen};
  color: ${colors.navy};
  display: inline-block;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  font-size: 1.5rem;
`

const BlogPostTemplate = props => {
  const { data } = props
  const post = data && data.post

  return (
    <Layout fixedHeader>
      <SEO title={`Unspecified - ${post.title}`} />
      <ContentBlock>
        <h1 style={{ paddingTop: "6rem" }}>{post.title}</h1>
        <p>Written By: {post.person.name}</p>
        <p>Published On: {moment(post.publishedAt).format("M/D/YY")}</p>
        <CategoryList>
          {post.categories.map(category => (
            <Category key={category._id}>{category.title}</Category>
          ))}
        </CategoryList>
        {post.body && <ReactMarkdown source={post.body} />}
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
      body
      slug {
        current
      }
      person {
        name
      }
    }
  }
`
