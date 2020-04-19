/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

async function createPages(graphql, actions) {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
  const personTemplate = path.resolve(`src/templates/person.js`)
  const legalPageTemplate = path.resolve(`src/templates/legalPage.js`)

  const result = await graphql(`
    {
      posts: allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      people: allSanityPerson {
        edges {
          node {
            id
            name
            slug {
              current
            }
          }
        }
      }
      legalPages: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const {
    people: { edges: people },
    posts: { edges: posts },
    legalPages: { edges: legalPages },
  } = result.data

  posts.forEach(({ node: { id, slug } }) => {
    const path = `/blog/${slug.current}/`

    createPage({
      path,
      component: blogPostTemplate,
      context: { id },
    })
  })

  people.forEach(({ node: { id, slug } }) => {
    const path = `/${slug.current}/`

    createPage({
      path,
      component: personTemplate,
      context: { id },
    })
  })

  legalPages.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: legalPageTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createPages(graphql, actions)
}
