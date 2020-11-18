import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
// import GatsbyImage from "gatsby-image"
import { graphql, Link } from "gatsby"
import GalleryCarousel from "../components/gallery-carousel"
import NumberFormat from "react-number-format"
import CategoryFilter from "../components/category-filter"
import { MdAddShoppingCart } from "react-icons/md"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function ProductsPage({ data }) {
  const products = data.allDatoCmsProduct
  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <motion.div className="content" variants={item} transition="easeInOut">
          <p className="pl-3 text-lg border-l-2 border-black md:text-xl">
            Products
          </p>

          <CategoryFilter />
        </motion.div>

        <motion.div className="flex flex-row flex-wrap -m-2 content" variants={item} transition="easeInOut">
          {/* Change node to be product */}
          {products.edges.map(({ node: product }, index) => (
            <div key={product.id} className="w-1/3 p-5 bg-gray-100 border-4 border-white">
              <Link
                to={`/product/` + product.slug + `/`}
                key={product.id}
                className="max-w-sm py-8 my-8 border-t border-gray-500"
              >
                <h2>{product.name}</h2>
              </Link>

              {/* <p>{index}</p> */}

              <p>{product.description}</p>

              <GalleryCarousel images={product.gallery} />

              {product.orderDetails.map(orderDetail => (
                <div key={orderDetail.id}>
                  {orderDetail.volumeSize} -{" "}
                  <NumberFormat
                    prefix={"£"}
                    value={orderDetail.price}
                    decimalScale={2}
                    displayType={"text"}
                    fixedDecimalScale={true}
                  />
                  <button
                    key={orderDetail.id}
                    className="p-2 mr-4 bg-gray-300 Product__buy Product snipcart-add-item"
                    data-item-id={product.name + " | " + orderDetail.volumeSize}
                    data-item-price={orderDetail.price}
                    // data-item-image={product.gallery[0].fluid.url && product.gallery[0].fluid.url}
                    data-item-description={product.description}
                    data-item-name={
                      product.name + " | " + orderDetail.volumeSize
                    }
                    data-item-url={
                      `https://www.zuckermausbakery.com/products/` +
                      product.name +
                      "/"
                    }
                  >
                    <MdAddShoppingCart className="inline text-4xl" /> Add to
                    basket
                  </button>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.section>
    </>
  )
}

export const query = graphql`
  query($slug: String) {
    allDatoCmsProduct(
      sort: { fields: name, order: ASC }
      filter: { productCategory: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          id
          name
          slug
          description
          orderDetails {
            price
            volumeSize
            id
          }
          gallery {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
