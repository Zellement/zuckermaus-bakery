import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import GatsbyImage from "gatsby-image"
import { graphql } from "gatsby"
import { MdAddShoppingCart } from 'react-icons/md'
import GalleryCarousel from "../components/gallery-carousel"

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
        </motion.div>

        <motion.div className="content" variants={item} transition="easeInOut">
          {/* Change node to be product */}
          {products.edges.map(({ node: product }) => (
            <div
              key={product.id}
              className="max-w-sm py-8 my-8 border-t border-gray-500"
            >
              <h2>{product.name}</h2>

              <p>{product.description}</p>
              
              <GalleryCarousel images={product.gallery} />

              {product.orderDetails.map(orderDetail => (
                <div>
                {orderDetail.volumeSize} - £{orderDetail.price}
                <button
                  key={orderDetail.id}
                  className="p-4 mr-4 bg-gray-300 Product__buy Product snipcart-add-item"
                  data-item-id={product.name + " | " + orderDetail.volumeSize}
                  data-item-price={orderDetail.price}
                  data-item-image={product.gallery[0].fluid.url}
                  data-item-description={product.description}
                  data-item-name={product.name + " | " + orderDetail.volumeSize}
                  data-item-url={`https://www.zuckermausbakery.com/products/`}
                >
                 <MdAddShoppingCart className="inline text-4xl" /> Add to basket
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
  query {
    allDatoCmsProduct {
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
