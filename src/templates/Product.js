import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import GalleryCarouselFull from "../components/GalleryCarouselFull"
import {
  hero,
  hero__header,
  container,
  slideInRight,
  fade,
} from "../helpers/transitionHelper"
import AddToBasket from "../components/atoms/AddToBasket"
import { BsArrowLeft } from "react-icons/bs"
import { HTMLContent } from "../components/Content"
import IconVegetarian from "../components/atoms/icons/Vegetarian"
import IconVegan from "../components/atoms/icons/Vegan"
import IconGlutenFree from "../components/atoms/icons/GlutenFree"
import IconBestSeller from "../components/atoms/icons/BestSeller"

export default function ProductPage({ data }) {
  return (
    <>
      <SEO title={data.product.name} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <motion.div variants={hero} className={"relative bg-red-500"}>
          <div className="container relative h-32 px-8 md:h-32 lg:h-56">
            <Link
              to={"/shop/" + data.product.productCategory.slug + "/"}
              className="inline-flex items-center mt-2 text-base text-white group lg:text-lg"
            >
              <BsArrowLeft className="inline-block mr-1 " />
              <span className="inline-block transition duration-300 transform group-hover:translate-x-4 group-focus:translate-x-4">
                See all {data.product.productCategory.name}
              </span>
            </Link>
            <motion.h1
              variants={hero__header}
              className="absolute bottom-0 left-0 w-full pl-8 -mb-1 text-2xl font-light leading-none pointer-events-none md:-mb-2 md:text-4xl lg:text-5xl text-sugar-pink font-display lg:w-2/5 xl:text-6xl lg:-mb-3 xl:-mb-4"
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
          <motion.div className="w-full py-16 content" variants={fade}>
            <div className="flex flex-col">
              <div className="z-10 w-full overflow-hidden lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-screen lg:-mt-48">
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                  className="w-full h-full bg-white"
                >
                  <GalleryCarouselFull images={data.product.gallery} />
                </motion.div>
              </div>

              <motion.div
                variants={fade}
                initial="initial"
                animate="enter"
                className="lg:w-2/5"
              >
                <div className="my-8 content">
                  <HTMLContent content={data.product.description} />
                </div>

                <div className="flex flex-row justify-start items-center mb-8 space-x-2">
                  {data.product.bestSeller ? <IconBestSeller className="text-red-500" /> : null}
                  {data.product.vegetarian ? (
                    <IconVegetarian className="w-8 h-8" />
                  ) : null}
                  {data.product.vegan ? (
                    <IconVegan className="w-8 h-8" />
                  ) : null}
                  {data.product.glutenFree ? (
                    <IconGlutenFree className="w-8 h-8" />
                  ) : null}
                </div>

                <div className="flex flex-col space-y-2 max-w-96">
                  {data.product.orderDetails.map((orderDetail, index) => (
                    <div
                      key={index}
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
      productCategory {
        id
        name
        slug
      }
      vegan
      vegetarian
      glutenFree
      bestSeller
      gallery {
        fluid(imgixParams: { w: "1200", h: "1000", fit: "crop" }) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
