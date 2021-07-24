import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { motion } from "framer-motion"
import GalleryCarousel from "../components/GalleryCarousel"
import { slideInRight, fade } from "../helpers/transitionHelper"
import AddToBasket from "../components/atoms/AddToBasket"
import { HTMLContent } from "../components/Content"
import IconVegetarian from "../components/atoms/icons/Vegetarian"
import IconVegan from "../components/atoms/icons/Vegan"
import IconGlutenFree from "../components/atoms/icons/GlutenFree"
import Hero from "../components/Hero"
import { IconBestSeller } from "../components/atoms/icons/Trends"
import ArrowLink from "../components/atoms/ArrowLink"

export default function ProductPage({ data }) {
  return (
    <>
      <Seo title={data.product.name} />
      <motion.div
        initial="initial"
        className="overflow-hidden"
        animate="enter"
        exit="exit"
      >
        <Hero
          className="border-b-2"
          header={data.product.name}
          secondaryName={data.product.secondaryName}
          backText={"See all " + data.product.productCategory.name}
          backDestination={"/shop/" + data.product.productCategory.slug + "/"}
        />
        <motion.section
          variants={fade}
          transition="easeInOut"
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
                  <GalleryCarousel
                    alt={data.product.gallery.alt}
                    images={data.product.gallery}
                  />
                </motion.div>
              </div>

              <motion.div
                variants={fade}
                initial="initial"
                animate="enter"
                className="lg:w-1/2 lg:pr-16"
              >
                <div className="p-4 my-8 border border-red-100 content">
                  <h3>Description</h3>
                  <HTMLContent content={data.product.description} />
                </div>
                {data.product.ingredients ? 
                <div className="p-4 my-8 text-sm border content border-rose-pink-100">
                  <h3 className="text-base">Ingredients</h3>
                  <HTMLContent content={data.product.ingredients} />
                </div>
                : null }

                <div className="flex flex-row items-center justify-start mb-8 space-x-2">
                  {data.product.bestSeller ? (
                    <IconBestSeller className="text-red-500" />
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

              { data.datoCmsGlobal.closeTheShop ? 
              <div className="flex flex-col p-4 space-y-2 text-sm bg-gray-100">
                <p className="font-semibold">{data.datoCmsGlobal.closedProductButtonMessage}</p>
                <p className="text-xs">Re-Opening: {data.datoCmsGlobal.dateReOpening}</p>
                <p className="text-xs">Check back soon!</p>
              </div>
              : 
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
              }                

                

                <ArrowLink
                  arrowLeft={true}
                  destination="/shop/"
                  text="Back to shop"
                  className="mt-8 text-sugar-pink-800"
                />
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
    datoCmsGlobal {
      closeTheShop
      dateReOpening(formatString: "DD/MM/Y")
      closedProductButtonMessage
    }
    product: datoCmsProduct(slug: { eq: $slug }) {
      name
      secondaryName
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
      ingredients
      gallery {
        gatsbyImageData(layout: CONSTRAINED, width: 1200, height: 1000)
        alt
      }
    }
  }
`
