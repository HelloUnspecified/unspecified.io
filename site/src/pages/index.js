import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #242e3c;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  position: relative;
`

const StyledLogo = styled(Logo)`
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  margin-bottom: 3rem;
`

const LearnMoreBlock = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
`

const NavText = styled.p`
  font-family: "Coda", cursive;
  font-size: 1.5rem;
  padding: 0 3rem;
`

const AboutBlock = styled.div`
  margin: 6rem auto;
  max-width: 100rem;
  padding-right: 5rem;
`

const IndexPage = ({ data }) => {
  console.log("data", data)
  return (
    <Layout>
      <SEO title="Unspecified" />
      <Main>
        <div style={{ width: "70%", height: "auto" }}>
          <StyledLogo />
        </div>
        <LearnMoreBlock>
          <NavText>Blog</NavText>
          <NavText>About</NavText>
          <NavText>Contact</NavText>
        </LearnMoreBlock>
      </Main>
      <AboutBlock>
        <h2>About</h2>
        <p>
          At Unspecified, we build product that builds communities. We’re a
          small, proud, hard working boutique software development shop who’s
          passion for software development and people have converged. It’s our
          mission to create software that connects people in a deeper, more
          meaningful way. We build websites, we build devices, we build services
          to support business, we make software to support people.We also
          provide a few consulting services for business in need of senior level
          development experiences. Executive coaching, architecture and product
          design, delivery management, and training.
        </p>
      </AboutBlock>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    posts: allSanityPost {
      edges {
        node {
          title
        }
      }
    }
  }
`
