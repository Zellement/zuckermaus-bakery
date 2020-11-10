import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import GatsbyImage from "gatsby-image"

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
      {console.log(data)}
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
        </motion.div>

        <motion.div className="content" variants={item} transition="easeInOut">
          {/* Change node to be product */}
          {products.edges.map(({ node: product }) => (
            <div key={product.id} className="max-w-sm py-8 my-8 border-t border-gray-500">
              <h2>{product.name}</h2>
              <GatsbyImage fluid={product.image.fluid} className="mb-4" />
              {product.orderDetails.map(orderDetail => (
              <button
                className="p-4 mr-4 bg-gray-300 Product__buy Product snipcart-add-item"
                data-item-id={product.name + " | " + orderDetail.volumeSize} 
                data-item-price={orderDetail.price}
                data-item-image={product.image.url}
                data-item-name={product.name + " | " + orderDetail.volumeSize} 
                data-item-url={`https://www.zuckermausbakery.com/products/`}
              >
                
              {orderDetail.volumeSize} - £{orderDetail.price}
              </button>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.section>
    </>
  )
}

export const query = graphql`
  query {
    allDatoCmsProduct {
      edges {
        node {
          id
          name
          slug
          orderDetails {
            price
            volumeSize
          }
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
