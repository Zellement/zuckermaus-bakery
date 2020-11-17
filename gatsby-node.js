exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
    query PagesQuery {
      pages: allDatoCmsProduct {
        nodes {
          slug
        }
      }
    }
     
    `)
    data.pages.nodes.forEach(node => {
      actions.createPage({
        path: 'product/' + node.slug + '/',
        component: require.resolve(`./src/templates/Product.js`),
        context: { slug: node.slug },
      })
    })
  }
  