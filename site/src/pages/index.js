import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Logo from "../components/shared/logo"
import ContentBlock from "../components/shared/contentBlock"
import SEO from "../components/shared/seo"
import colors from "../utilities/colors"

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: ${colors.navy};
  color: ${colors.white};
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
const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 6rem;
`

const AboutLogo = styled.img`
  height: 6rem;
  width: auto;
  margin: 1rem 2rem;
`

const PostBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 30rem;
  padding: 1.5rem;
  margin-right: 2rem;
  border-radius: 1rem;
  background-color: ${colors.white};
  box-shadow: 10px 10px 8px #888888;
`

const PostImage = styled.img`
  width: 30rem;
  height: 10rem;
  object-fit: cover;
`

const CurrentPosts = styled.div`
  display: flex;
`

const IndexPage = ({ data }) => {
  console.log("data", data)
  const {
    posts: { edges: posts },
    logos: { edges: logos },
  } = data

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
      <ContentBlock border>
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

        <Logos>
          {logos.map(logo => (
            <AboutLogo src={logo.node.image.asset.url} key={logo.node.name} />
          ))}
        </Logos>

        <Link to="/clark" style={{ paddingRight: "2rem" }}>
          Clark Sell
        </Link>
        <Link to="/sara">Sara Gibbons</Link>
      </ContentBlock>

      <div
        style={{
          width: "100%",
          padding: "2rem 0",
          backgroundColor: "rgb(194,153,107, 0.2)",
        }}
      >
        <ContentBlock>
          <h2>Blog</h2>
          <CurrentPosts>
            {posts.map(post => (
              <PostBlock
                key={post.node.slug.current}
                to={`blog/${post.node.slug.current}`}
              >
                <h3>{post.node.title}</h3>
                <PostImage src={post.node.mainImage.asset.url} />
                <p>{post.node.shortDescription}</p>
              </PostBlock>
            ))}
          </CurrentPosts>
        </ContentBlock>
      </div>

      <div
        style={{
          width: "100%",
          padding: "2rem 0",
          backgroundColor: "#242e3c",
        }}
      >
        <ContentBlock>
          <h2 style={{ color: "#fff" }}>Stuff We Can't Get Enough Of</h2>
        </ContentBlock>
      </div>

      <ContentBlock>
        <h2>We'd Love To Hear From You!</h2>
      </ContentBlock>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    posts: allSanityPost(
      limit: 4
      sort: { fields: [publishedAt], order: DESC }
    ) {
      edges {
        node {
          title
          shortDescription
          slug {
            current
          }
          person {
            name
            slug {
              current
            }
          }
          mainImage {
            asset {
              url
            }
          }
        }
      }
    }
    logos: allSanityLogo {
      edges {
        node {
          name
          image {
            asset {
              url
            }
          }
        }
      }
    }
  }
`
