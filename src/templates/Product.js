import React from "react"
import { graphql, Link, navigate } from "gatsby"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import NumberFormat from "react-number-format"
import { MdAddShoppingCart } from "react-icons/md"
import GalleryCarouselFull from "../components/GalleryCarouselFull"
import { hero, hero__header, container, slideInRight } from "../helpers/transitionHelper"

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

const goBack = (e) => {
  e.preventDefault()
  navigate(-1)
}

export default function ProductPage({ data, pageContext }) {
  return (
    <>
      <SEO title={data.product.name} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <motion.div
          variants={hero}
          className={"relative bg-red-500"}
        >
          <div className="container relative h-20 px-8 md:h-32">
            <motion.h1
              variants={hero__header}
              className="absolute bottom-0 left-0 w-1/2 ml-8 -mb-3 text-5xl font-light leading-none pointer-events-none text-sugar-pink font-display"
            >
              {data.product.name} 
            </motion.h1>
          </div>
        </motion.div>
        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="container relative px-8"
        >
          <motion.div
            className="py-16 content"
            variants={item}
            transition="easeInOut"
          >
            <div>
              <Link onClick={goBack} to="/products/">
                Go back
              </Link>

              <div className="absolute top-0 right-0 z-10 w-1/2 h-screen -mt-10">
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                  className="h-full w-100"
                >
                  <GalleryCarouselFull images={data.product.gallery} />
                </motion.div>
              </div>

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
      </motion.div>
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
