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
    <div>
      <p>Filter</p>
      {productsWithCounts.map(category => (
        <Link className="block" key={category.id} to={`/category/${category.slug}/`}>{category.name} {category.count}</Link>
      ))}
    </div>
  )
}
