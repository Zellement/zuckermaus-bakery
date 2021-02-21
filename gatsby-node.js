exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query PagesQuery {
      pages: allDatoCmsProduct {
        nodes {
          slug
        }
      }
      category: allDatoCmsProductCategory {
        nodes {
          name
          slug
        }
      }
    }
  `)
  data.pages.nodes.forEach(node => {
    actions.createPage({
      path: "shop/product/" + node.slug + "/",
      component: require.resolve(`./src/templates/Product.js`),
      context: { slug: node.slug },
    })
  })
  data.category.nodes.forEach(node => {
    actions.createPage({
      path: "shop/" + node.slug + "/",
      component: require.resolve(`./src/pages/shop.js`),
      context: { slug: node.slug, title: node.name },
    })
  })
}