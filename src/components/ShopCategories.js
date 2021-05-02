import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

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
          image: productCategory.categoryMainImage
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

export default function CategoryFilter({
  showAll,
  linkClasses,
  asCards,
  nameClassName
}) {
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
            categoryMainImage {
              gatsbyImageData(layout: CONSTRAINED, height: 400)
              alt
            }
          }
        }
      }
    }
  `)

  const productsWithCounts = countProductsInCategories(products.nodes)

  return (
    <>
      {showAll ? (
        <Link
          className={
            "flex flex-row items-center space-x-2 group md:hover:text-red-500 md:focus:text-red-500 " +
            linkClasses
          }
          to="/shop/"
        >
          <span>All</span>{" "}
          <span className="text-2xs text-sugar-pink-700">
            {products.nodes.length}
          </span>
        </Link>
      ) : null}
      {productsWithCounts.map((category) => (
        <Link
          className={
            "relative flex flex-row items-center group " +
            linkClasses
          }
          key={category.id}
          to={`/shop/${category.slug}/`}
        >
          <span className={nameClassName}>{category.name}</span>
          
          <GatsbyImage
            image={category.image.gatsbyImageData}
            backgroundColor="#F3B8D5"
            alt={category.image.alt ? category.image.alt : ""}
            className="block object-cover w-full h-full mb-px"
          />
          {/* <span className="text-2xs text-sugar-pink-700">{category.count}</span> */}
        </Link>
      ))}
    </>
  )
}
