import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/shared/seo"
import Layout from "../components/layout"

const ContentBlock = styled.div`
  margin: 6rem auto;
  max-width: 100rem;
`

const PersonTemplate = props => {
  const { data, errors } = props
  const person = data && data.person

  console.log("person", person)

  const { name, title } = person

  return (
    <Layout>
      <SEO title={`Unspecified - ${person.name}`} />
      <ContentBlock>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </ContentBlock>
    </Layout>
  )
}

export default PersonTemplate

export const query = graphql`
  query PersonTemplateQuery($id: String!) {
    person: sanityPerson(id: { eq: $id }) {
      id
      name
      title
      _rawBio(resolveReferences: { maxDepth: 5 })
      slug {
        current
      }
      image {
        asset {
          url
        }
      }
    }
  }
`
