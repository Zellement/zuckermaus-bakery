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
      deals: allDatoCmsDeal {
        nodes {
          dealName
          slug
        }
      }
      blog: allDatoCmsBlog {
        nodes {
          title
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
  // data.deals.nodes.forEach(node => {
  //   actions.createPage({
  //     path: "deals/" + node.slug + "/",
  //     component: require.resolve(`./src/templates/Deal.js`),
  //     context: { slug: node.slug, title: node.dealName },
  //   })
  // })
  data.blog.nodes.forEach(node => {
    actions.createPage({
      path: "blog/" + node.slug + "/",
      component: require.resolve(`./src/templates/Blog.js`),
      context: { slug: node.slug, title: node.name },
    })
  })
}

const express = require('express')
exports.onCreateDevServer=({app})=>{
    app.use(express.static('public'))
}