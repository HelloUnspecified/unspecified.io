import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../utilities/colors"
import { below } from "../utilities/breakpoint"

const PostBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 41rem;
  padding: 1.5rem;
  margin-right: 2rem;
  border-radius: 1rem;
  margin-bottom: -14rem;

  ${below.med`
    width: 35rem;
    margin-right: 0;
    margin-bottom: -6rem;
  `};
`

const PostImage = styled.img`
  width: 41rem;
  height: 30rem;
  object-fit: cover;

  ${below.med`
    width: 30rem;
    height: 20rem;
  `};
`

const PostDetail = styled.div`
  background-color: ${colors.white};
  position: relative;
  top: -10rem;
  width: 34rem;
  height: 26rem;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 2px 2px 5px #888888;
  display: flex;
  flex-direction: column;

  ${below.med`
    width: 28rem;
    height: auto;
    margin-bottom: 5rem;
    top: -6rem;
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
    <PostBlock key={currentSlug}>
      <PostImage src={imageUrl} />
      <PostDetail>
        <h3>{title}</h3>
        <p style={{ flexGrow: 2 }}>{shortDescription}</p>
        <Link to={`blog/${currentSlug}`}>Read More</Link>
      </PostDetail>
    </PostBlock>
  )
}

export default BlogPostPreview
