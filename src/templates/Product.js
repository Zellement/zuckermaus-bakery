import React from "react"
import { graphql, Link, navigate } from "gatsby"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import NumberFormat from "react-number-format"
import { MdAddShoppingCart } from "react-icons/md"
import GalleryCarousel from "../components/GalleryCarousel"

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 1,
      delayChildren: 1,
      duration: 0.3,
    },
  },
}

const slideInLeft = {
  hidden: { opacity: 0, x: -500 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1.5,
      type: "tween",
      bounce: 0.25,
    },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 1000 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
}

const goBack = (e) => {
  e.preventDefault()
  navigate(-1)
}

export default function ProductPage({ data }) {
  return (
    <>
      <SEO title={data.product.name} />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <motion.div
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <div>
            <Link onClick={goBack} to="/products/">
              Go back
            </Link>

            <div className="absolute top-0 right-0 z-10 w-1/2 h-screen overflow-x-hidden">
              <motion.div
                variants={slideInRight}
                initial="hidden"
                animate="visible"
                className="w-100"
              >
                <GalleryCarousel images={data.product.gallery} />
              </motion.div>
            </div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
              className="p-8 mt-40 overflow-hidden bg-red-100"
            >
              {data.product.name}
            </motion.h1>

            {data.product.orderDetails.map((orderDetail) => (
              <div key={data.product.id}>
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
                  data-item-id={
                    data.product.name + " | " + orderDetail.volumeSize
                  }
                  data-item-price={orderDetail.price}
                  // data-item-image={product.gallery[0].fluid.url && product.gallery[0].fluid.url}
                  data-item-description={data.product.description}
                  data-item-name={
                    data.product.name + " | " + orderDetail.volumeSize
                  }
                  data-item-url={
                    `https://www.zuckermausbakery.com/products/` +
                    data.product.name +
                    "/"
                  }
                >
                  <MdAddShoppingCart className="inline text-4xl" /> Add to
                  basket
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    product: datoCmsProduct(slug: { eq: $slug }) {
      name
      id
      description
      orderDetails {
        price
        volumeSize
      }
      vegan
      vegetarian
      gallery {
        fluid(imgixParams: { w: "1200", h: "1200", fit: "crop" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
