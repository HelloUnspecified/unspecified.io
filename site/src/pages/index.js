import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Logo from "../components/shared/logo"
import ContentBlock from "../components/shared/contentBlock"
import SEO from "../components/shared/seo"
import BlogPostPreview from "../components/blogPostPreview"
import Contact from "../components/contact"
import TakeAction from "../components/takeAction"
import colors from "../utilities/colors"
import { below } from "../utilities/breakpoint"

const Main = styled.div`
  height: 60vh;
  width: 100vw;
  display: flex;
  background-color: ${colors.navy};
  color: ${colors.white};
  justify-content: center;
  align-items: center;
  position: relative;
`

const LogoContainer = styled.div`
  width: 60%;
  height: auto;

  ${below.med`
    width: 80%;
  `};
`

const StyledLogo = styled(Logo)`
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  margin-bottom: 3rem;
`

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
  position: relative;
`

const AboutLogo = styled.img`
  height: 6rem;
  width: auto;
  margin: 1rem 2rem;
  filter: grayscale(100%);
`

const Peoples = styled.div`
  display: flex;
  padding-top: 5rem;
  justify-content: space-evenly;

  ${below.med`
    flex-direction: column;
  `};
`

const PersonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PersonImage = styled.img`
  width: 25rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 1rem;
`

const Name = styled.p`
  font-family: "Coda", cursive;
  font-size: 2rem;
  margin-bottom: 0;
  line-height: 1.2;
`

const Service = styled.div`
  border: 1px solid ${colors.gold};
  padding: 2rem;
  width: 40rem;
  margin: 1rem;
`

const PassionTitle = styled.p`
  font-family: "Coda", cursive;
  font-size: 2rem;
  margin-bottom: 0;
  line-height: 1.2;
  color: ${colors.red};
  font-weight: 500;
`

const Title = styled.p``

const CurrentPosts = styled.div`
  display: flex;
  justify-content: center;

  ${below.med`
    flex-direction: column;
  `};
`

const IndexPage = ({ data }) => {
  const {
    logos: { edges: logos },
    people: { edges: people },
    posts: { edges: posts },
    services: { edges: services },
  } = data

  const bottomBlock = (
    <Peoples>
      {people.map(person => (
        <PersonBlock>
          <PersonImage
            src={person.node.image.asset.url}
            alt={person.node.name}
          />
          <Name>{person.node.name}</Name>
          <Title>{person.node.title}</Title>
        </PersonBlock>
      ))}
    </Peoples>
  )

  return (
    <Layout>
      <SEO title="Unspecified" />
      <Main>
        <LogoContainer>
          <StyledLogo />
        </LogoContainer>
      </Main>

      {/* TAKE ACTION */}
      <div
        style={{
          width: "100%",
          backgroundColor: colors.linen,
        }}
      >
        <ContentBlock type="short">
          <TakeAction />
        </ContentBlock>
      </div>

      {/* ABOUT */}
      <ContentBlock border id="about" side="left">
        <h2>Unspecified Builds Product</h2>
        <p style={{ fontSize: "1.8rem" }}>
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
        {bottomBlock}
        <Logos>
          {logos.map(logo => (
            <AboutLogo src={logo.node.image.asset.url} key={logo.node.name} />
          ))}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgb(255,255,255,0.4)",
            }}
          />
        </Logos>
      </ContentBlock>

      {/* BLOG */}
      <div
        style={{
          width: "100%",
          backgroundColor: colors.navy,
        }}
      >
        <ContentBlock id="blog" type="wide">
          <CurrentPosts>
            {posts.map(post => (
              <BlogPostPreview post={post} />
            ))}
          </CurrentPosts>
        </ContentBlock>
      </div>

      {/* SERVICES */}
      <div
        style={{
          width: "100%",
          backgroundColor: colors.linen,
        }}
      >
        <ContentBlock id="services" border side="right" borderColor="white">
          <h2>Services</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {services.map(service => (
              <Service>
                <PassionTitle>{service.node.title}</PassionTitle>
                <p>{service.node.description}</p>
              </Service>
            ))}
          </div>
        </ContentBlock>
      </div>

      {/* CONTACT FORM */}
      <ContentBlock id="contact" border bottom borderSide="left">
        <Contact />
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
    services: allSanityService {
      edges {
        node {
          title
          description
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
    people: allSanityPerson(sort: { fields: [listingOrder], order: ASC }) {
      edges {
        node {
          id
          name
          title
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
    }
  }
`
