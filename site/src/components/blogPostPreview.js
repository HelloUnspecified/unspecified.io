import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { below, colors } from "../utilities"

const PostBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  padding: 1.5rem;
  margin-right: 2rem;
  border-radius: 1rem;
  margin-bottom: -10rem;

  ${below.larger`
    width: 70%;
    margin-right: 0;
    margin-bottom: -6rem;
  `};

  ${below.small`
    width: 100%;
  `};
`

const PostImage = styled.img`
  max-width: 100%;
  height: 30rem;
  object-fit: cover;
`

const PostDetail = styled.div`
  background-color: ${colors.white};
  position: relative;
  top: -10rem;
  width: 94%;
  height: 24rem;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 2px 2px 5px #888888;
  display: flex;
  flex-direction: column;

  ${below.small`
    height: 34rem;
  `};
`

const BlogPostPreview = ({ post }) => {
  const {
    node: {
      title,
      shortDescription,
      slug: { current: currentSlug },
      mainImage: {
        asset: { url: imageUrl },
      },
    },
  } = post

  return (
    <PostBlock key={currentSlug} to={`blog/${currentSlug}`}>
      <PostImage src={imageUrl} />
      <PostDetail>
        <h3>{title}</h3>
        <p style={{ flexGrow: 2 }}>{shortDescription}</p>
        <p>Read More</p>
      </PostDetail>
    </PostBlock>
  )
}

export default BlogPostPreview
