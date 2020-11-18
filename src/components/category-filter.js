import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

function countProductsInCategories(products) {
  // Return the products with counts
  const counts = products
    .map(product => product.productCategory)
    .flat()
    .reduce((acc, productCategory) => {
      // Check if this is an existing productCategory
      const existingCategory = acc[productCategory.id]
      if (existingCategory) {
        acc[productCategory.id].count += 1
      } else {
        // If it is, increment by 1, otherwise create a new entry in our acc and set to 1
        acc[productCategory.id] = {
          id: productCategory.id,
          name: productCategory.name,
          slug: productCategory.slug,
          count: 1,
        }
      }
      return acc
    }, {})

  const sortedCatgeories = Object.values(counts).sort(
    (a, b) => b.count - a.count
  )

  return sortedCatgeories
}

export default function CategoryFilter() {
  const { products } = useStaticQuery(graphql`
    query {
      products: allDatoCmsProduct {
        nodes {
          name
          id
          productCategory {
            id
            name
            slug
          }
        }
      }
    }
  `)

  const productsWithCounts = countProductsInCategories(products.nodes)

  return (
    <div className="mb-12">
      <p>Bread Categories</p>
      <Link className="inline-block p-4 m-2 bg-gray-200" to="/products/">All {products.nodes.length}</Link>
      {productsWithCounts.map(category => (
        <Link className="inline-block p-4 m-2 bg-gray-200" key={category.id} to={`/category/${category.slug}/`}>{category.name} {category.count}</Link>
      ))}
    </div>
  )
}
