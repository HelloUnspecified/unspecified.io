import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Logo from "../components/shared/logo"
import ContentBlock from "../components/shared/contentBlock"
import SEO from "../components/shared/seo"
import BlogPostPreview from "../components/blogPostPreview"
import ContactForm from "../components/contactFrom"
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
  bottom: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
`

const NavText = styled.p`
  font-family: "Coda", cursive;
  font-size: 2.1rem;
  padding: 0 3rem;
  color: ${colors.fonts.light};

  &:hover {
    color: ${colors.gold};
  }
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

const AboutPeople = styled.div`
  padding: 6rem 7.1rem;
`

const PersonImage = styled.img`
  width: 20rem;
  height: 13rem;
  object-fit: cover;
  border-radius: 1rem;
`

const Name = styled.p`
  font-family: "Coda", cursive;
  font-size: 2rem;
  margin-bottom: 0;
  line-height: 1.2;
`

const Passion = styled.div`
  border: 1px solid ${colors.linen};
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
`

const IndexPage = ({ data }) => {
  const {
    logos: { edges: logos },
    passions: { edges: passions },
    people: { edges: people },
    posts: { edges: posts },
  } = data

  const bottomBlock = (
    <div
      style={{
        display: "flex",
        paddingTop: "2rem",
        justifyContent: "space-evenly",
      }}
    >
      {people.map(person => (
        <div
          // to={`/${person.node.slug.current}`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PersonImage
            src={person.node.image.asset.url}
            alt={person.node.name}
          />
          <Name>{person.node.name}</Name>
          <Title>{person.node.title}</Title>
        </div>
      ))}
    </div>
  )

  return (
    <Layout>
      <SEO title="Unspecified" />
      <Main>
        <div style={{ width: "70%", height: "auto" }}>
          <StyledLogo />
        </div>
        <LearnMoreBlock>
          <Link to="#about">
            <NavText>About</NavText>
          </Link>
          <Link to="#blog">
            <NavText>Blog</NavText>
          </Link>
          <Link to="#contact">
            <NavText>Contact</NavText>
          </Link>
        </LearnMoreBlock>
      </Main>

      {/* BLOG */}
      <ContentBlock id="blog" border top>
        <CurrentPosts>
          {posts.map(post => (
            <BlogPostPreview post={post} />
          ))}
        </CurrentPosts>
      </ContentBlock>

      {/* PASSIONS */}
      <div
        style={{
          width: "100%",
          backgroundColor: colors.navy,
          color: colors.white,
        }}
      >
        <ContentBlock id="passions" border side="right" borderColor="white">
          <h2 style={{ color: "#fff" }}>Stuff We Can't Get Enough Of</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {passions.map(passion => (
              <Passion>
                <PassionTitle>{passion.node.title}</PassionTitle>
                <p>{passion.node.description}</p>
              </Passion>
            ))}
          </div>
        </ContentBlock>
      </div>

      {/* SERVICES */}
      <div
        style={{
          width: "100%",
          backgroundColor: colors.linen,
        }}
      >
        <ContentBlock id="passions" border side="left" borderColor="navy">
          <h2>Services</h2>
        </ContentBlock>
      </div>

      {/* ABOUT */}
      <ContentBlock border id="about" side="right">
        <h2>Who We Are</h2>
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
        {bottomBlock}
        <Logos>
          {logos.map(logo => (
            <AboutLogo src={logo.node.image.asset.url} key={logo.node.name} />
          ))}
        </Logos>
      </ContentBlock>

      {/* CONTACT FORM */}
      <div
        style={{
          width: "100%",
          backgroundColor: colors.linen,
        }}
      >
        <ContentBlock id="contact" border bottom borderSide="left">
          <h2>We'd Love To Hear From You!</h2>
          <ContactForm />
        </ContentBlock>
      </div>
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
    passions: allSanityPassion {
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
