/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions
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
    }
  `)

  if (result.errors) throw result.errors

  const {
    people: { edges: people },
    posts: { edges: posts },
  } = result.data

  console.log("posts", posts)
  console.log("people", people)

  posts.forEach(({ node: { id, slug } }) => {
    const path = `/blog/${slug.current}/`

    createPage({
      path,
      component: require.resolve("./src/templates/blogPost.js"),
      context: { id },
    })
  })

  people.forEach(({ node: { id, slug } }) => {
    const path = `/${slug.current}/`

    createPage({
      path,
      component: require.resolve("./src/templates/person.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions)
}
