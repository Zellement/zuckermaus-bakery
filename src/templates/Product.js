import React from "react"
import { graphql, Link, navigate } from "gatsby"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import GalleryCarouselFull from "../components/GalleryCarouselFull"
import {
  hero,
  hero__header,
  container,
  slideInRight,
} from "../helpers/transitionHelper"
import AddToBasket from "../components/atoms/AddToBasket"

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

export default function ProductPage({ data }) {
  return (
    <>
      <SEO title={data.product.name} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <motion.div variants={hero} className={"relative bg-red-500"}>
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
            className="w-1/3 py-16 content"
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
                <div
                  key={orderDetail.id}
                  className="relative"
                  id={orderDetail.id}
                >
                  <AddToBasket
                    price={orderDetail.price}
                    name={data.product.name}
                    description={data.product.description}
                    id={orderDetail.id}
                    volumeSize={orderDetail.volumeSize}
                  />
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
