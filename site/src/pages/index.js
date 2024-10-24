import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ContentBlock from "../components/shared/contentBlock"
import SEO from "../components/shared/seo"
import BlogPostPreview from "../components/blogPostPreview"
// import Contact from "../components/contact"
import TakeAction from "../components/takeAction"
import Technologies from "../components/technologies"
import TwitchVideo from "../components/twitchVideo"
import { below, colors } from "../utilities"
import { graphql } from "gatsby"

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
  max-width: 120rem;

  ${below.larger`
    width: 80%;
  `};
`

const StyledLogo = styled.img`
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  margin-bottom: 3rem;
  max-height: 50vh;
`

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
  position: relative;
  padding: 0 7rem;

  ${below.small`
    padding: 0;
  `};
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

const PersonBlock = styled(Link)`
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
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0;
  line-height: 1.2;
`

const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${below.med`
    flex-direction: column;
    align-items: center;
  `};
`

const Service = styled.div`
  border: 1px solid ${colors.gold};
  padding: 2rem;
  width: 48%;
  margin: 1rem;

  ${below.med`
    width: 70%;
  `};

  ${below.small`
    width: 100%;
  `};
`

const ServiceTitle = styled.p`
  font-family: "Coda", cursive;
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
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
    align-items: center;
  `};
`

const IndexPage = ({ data }) => {
  const {
    logos: { edges: logos },
    people: { edges: people },
    posts: { edges: posts },
    services: { edges: services },
    technologies: { edges: technologies },
  } = data

  const bottomBlock = (
    <Peoples>
      {people.map((person) => (
        <PersonBlock
          key={person.node.slug.current}
          to={`/${person.node.slug.current}`}
        >
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
          <StyledLogo src="/unspecified-logo-transparent.svg" />
        </LogoContainer>
      </Main>

      {/* TAKE ACTION */}
      {/* <div
        style={{
          width: "100%",
          backgroundColor: colors.linen,
        }}
      >
        <ContentBlock type="short">
          <TakeAction />
        </ContentBlock>
      </div> */}

      {/* ABOUT */}
      <ContentBlock border id="about" side="left" top borderColor="gold">
        <h2>Unspecified Builds Product</h2>
        <p style={{ lineHeight: "1.9" }}>
          At Unspecified, we build product that builds communities. We’re a
          small, proud, hard working boutique software development shop who’s
          passion for software development and people have converged. It’s our
          mission to create software that connects people in a deeper, more
          meaningful way. We build websites, we build devices, we build services
          to support business, we make software to support people. We also
          provide a few consulting services for business in need of senior level
          development experiences. Executive coaching, architecture and product
          design, delivery management, and training.
        </p>
        {bottomBlock}
        <Logos>
          {logos.map((logo) => (
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
        <ContentBlock id="blog" type="wide" side="right" topSpillOver>
          <CurrentPosts>
            {posts.map((post) => (
              <BlogPostPreview post={post} />
            ))}
          </CurrentPosts>
        </ContentBlock>
      </div>

      {/* TECHNOLOGIES */}
      <ContentBlock>
        <h2>Innovation For A Better You</h2>
        <Technologies technologies={technologies} />
      </ContentBlock>

      {/* SERVICES */}
      <div
        style={{
          width: "100%",
          backgroundColor: colors.linen,
        }}
      >
        <ContentBlock id="services">
          <h2>Services</h2>
          <ServicesList>
            {services.map((service) => (
              <Service>
                <ServiceTitle>{service.node.title}</ServiceTitle>
                <p>{service.node.description}</p>
              </Service>
            ))}
          </ServicesList>
        </ContentBlock>
      </div>

      <TwitchVideo />

      {/* CONTACT FORM
      <ContentBlock id="contact" border bottom side="right">
        <Contact />
      </ContentBlock> */}
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
    technologies: allSanityTechnology(
      filter: { displayOnLanding: { eq: true } }
    ) {
      edges {
        node {
          name
          logo {
            asset {
              url
            }
          }
        }
      }
    }
  }
`
