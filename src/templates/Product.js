import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import GalleryCarousel from "../components/GalleryCarousel"
import { container, slideInRight, fade } from "../helpers/transitionHelper"
import AddToBasket from "../components/atoms/AddToBasket"
import { HTMLContent } from "../components/Content"
import IconVegetarian from "../components/atoms/icons/Vegetarian"
import IconVegan from "../components/atoms/icons/Vegan"
import IconGlutenFree from "../components/atoms/icons/GlutenFree"
import Hero from "../components/Hero"
import {
  IconBestSeller,
  IconTrendingNow,
} from "../components/atoms/icons/Trends"

export default function ProductPage({ data }) {
  return (
    <>
      <SEO title={data.product.name} />
      <motion.div
        initial="initial"
        className="overflow-hidden"
        animate="enter"
        exit="exit"
      >
        <Hero
          className="border-b-2"
          header={data.product.name}
          backText={"See all " + data.product.productCategory.name}
          backDestination={"/shop/" + data.product.productCategory.slug + "/"}
        />
        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="container relative px-8"
        >
          <motion.div className="w-full py-16 content" variants={fade}>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 lg:order-last">
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                  className="w-full h-full bg-white"
                >
                  <GalleryCarousel images={data.product.gallery} />
                </motion.div>
              </div>

              <motion.div
                variants={fade}
                initial="initial"
                animate="enter"
                className="lg:w-1/2 lg:pr-16"
              >
                <div className="my-8 content">
                  <HTMLContent content={data.product.description} />
                </div>

                <div className="flex flex-row items-center justify-start mb-8 space-x-2">
                  {data.product.bestSeller ? <IconBestSeller className="text-red-500" /> : null}
                  {data.product.trendingNow ? (
                    <IconTrendingNow className="" />
                  ) : null}

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
                    <div key={index} className="relative" id={orderDetail.id}>
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
        id
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
      trendingNow
      gallery {
        fluid(imgixParams: { w: "1200", h: "1000", fit: "crop" }) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
