import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { BsArrowRight } from "react-icons/bs"

function countProductsInCategories(products) {
  // Return the products with counts
  const counts = products
    .map((product) => product.productCategory)
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

  const sortedCatgeories = Object.values(counts)

  // Below sorts by count, don't need
  // .sort(
  //   (a, b) => b.count - a.count
  // )

  return sortedCatgeories
}

export default function CategoryFilter({ className }) {
  const { products } = useStaticQuery(graphql`
    query {
      products: allDatoCmsProduct(
        sort: { fields: productCategory___name, order: ASC }
      ) {
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
    <div className={"category-filter " + className}>
      <Link
        className="flex flex-row items-center p-2 space-x-2 group hover:bg-sugar-pink-500 focus:sugar-pink-500"
        to="/shop/"
      >
        <BsArrowRight className="transition duration-300 text-sugar-pink group-hover:text-rose-pink-600" />
        <span>All</span>{" "}
        <span className="text-2xs text-sugar-pink-700">
          {products.nodes.length}
        </span>
      </Link>
      {productsWithCounts.map((category) => (
        <Link
          className="flex flex-row items-center p-2 space-x-2 group hover:bg-sugar-pink-500 focus:sugar-pink-500"
          key={category.id}
          to={`/shop/${category.slug}/`}
        >
          <BsArrowRight className="transition duration-300 text-sugar-pink group-hover:text-rose-pink-600" />
          <span>{category.name}</span>
          <span className="text-2xs text-sugar-pink-700">{category.count}</span>
        </Link>
      ))}
    </div>
  )
}
