import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import ContentBlock from "../components/shared/contentBlock"
import Icon from "../components/shared/icon"
import SEO from "../components/shared/seo"
import Layout from "../components/layout"
import { colors, socials } from "../utilities"

const SOCIALS = ["linkedIn", "github", "facebook", "twitter", "instagram"]
const ICON_SIZE = "3.5rem"

const Title = styled.h2`
  font-family: "Lato", sans-serif;
`

const Name = styled.h1`
  font-size: 6rem;
`

const NameBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 8rem;
`

const PersonImage = styled.img`
  width: 30rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 1rem;
`

const Socials = styled.div`
  display: flex;
`

const StyledIcon = styled(Icon)`
  fill: ${colors.red};
  padding-right: 1rem;
  width: ${ICON_SIZE};

  &:hover {
    fill: ${colors.gold};
  }
`

const Quote = styled.p`
  font-style: italic;
  font-size: 2.1rem;
  margin-top: 2rem;
  color: ${colors.navy};
`

const Images = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`

const ProfileImage = styled.img`
  max-height: 28rem;
  object-fit: cover;
  margin-top: 1rem;
  flex: 0 0 auto;
`

const PersonTemplate = props => {
  const { data } = props
  const person = data && data.person

  const { name, title, bio, image, quote, experience, profileImages } = person

  const firstName = name.split(" ")[0]

  const getSocialUrl = ({ socialSettings, username }) => {
    return `${socialSettings.rootMemberUrl}${username}`
  }

  const unspecifiedExperience = experience.filter(
    exp => exp.companyName === "Unspecified"
  )[0]

  return (
    <Layout fixedHeader>
      <SEO title={`Unspecified - ${name}`} />
      <ContentBlock type="short">
        <NameBlock>
          <div>
            <Name>{name}</Name>
            <Title>{title}</Title>
            <Socials>
              {SOCIALS.map(socialChannel => {
                if (person[socialChannel]) {
                  const socialSettings = socials.find(
                    element => element.icon === socialChannel
                  )
                  return (
                    <a
                      href={getSocialUrl({
                        socialSettings,
                        username: person[socialChannel],
                      })}
                      target="_blank"
                      key={person[socialChannel]}
                    >
                      <StyledIcon
                        icon={socialChannel}
                        height={ICON_SIZE}
                        width={ICON_SIZE}
                        viewBoxWidth={
                          socialSettings !== undefined
                            ? socialSettings.viewbox.width
                            : 24
                        }
                        viewBoxHeight={
                          socialSettings !== undefined
                            ? socialSettings.viewbox.height
                            : 24
                        }
                      />
                    </a>
                  )
                }
              })}
            </Socials>
            <Quote>"{quote}"</Quote>
          </div>
          <PersonImage src={image.asset.url} alt={name} />
        </NameBlock>
      </ContentBlock>

      <div
        style={{
          width: "100%",
          backgroundColor: colors.linen,
        }}
      >
        <ContentBlock border side="left" top borderColor="gold">
          <h2>{`About ${firstName}`}</h2>
          {bio && <ReactMarkdown source={bio} />}
        </ContentBlock>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: colors.navy,
        }}
      >
        <ContentBlock type="wide" side="right" topSpillOver>
          <Images>
            {profileImages.map(image => (
              <ProfileImage src={image.asset.url} alt={name} key={image.id} />
            ))}
          </Images>
        </ContentBlock>
      </div>

      <ContentBlock>
        <h2>Making It Happen At Unspecified</h2>
        {unspecifiedExperience && (
          <ReactMarkdown>{unspecifiedExperience.description}</ReactMarkdown>
        )}
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
      quote
      bio
      slug {
        current
      }
      image {
        asset {
          id
          url
        }
      }
      facebook
      instagram
      github
      linkedIn
      twitter
      education {
        receivedAt
        school
        received
      }
      profileImages {
        asset {
          url
        }
      }
      experience {
        companyName
        description
        startedAt
        title
        volunteer
        endedAt
        currrentPosition
        technologies {
          description
          logo {
            asset {
              url
            }
          }
        }
      }
    }
    posts: allSanityPost(filter: { person: { id: { eq: $id } } }) {
      edges {
        node {
          title
          shortDescription
          slug {
            current
          }
          mainImage {
            asset {
              url
            }
          }
        }
      }
    }
  }
`
