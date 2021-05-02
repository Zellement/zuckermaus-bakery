import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import { GatsbyImage } from "gatsby-plugin-image"
import ArrowLink from "../components/atoms/ArrowLink"
import ShopCategories from "../components/ShopCategories"
import ZuckermausStory from "../components/ZuckermausStory"

export const query = graphql`
  query {
    datoCmsHomepage {
      id
      heroButtonText
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH)
        alt
      }
      heroText
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className=""
      >
        <motion.div
          className="relative h-screen-5/10 md:h-screen-8/10"
          variants={fade}
          transition="easeInOut"
        >
          <GatsbyImage
            image={data.datoCmsHomepage.heroImage.gatsbyImageData}
            className="object-cover w-full h-full"
            alt={
              data.datoCmsHomepage.heroImage.alt
                ? data.datoCmsHomepage.heroImage.alt
                : ""
            }
          />
          <div className="absolute z-30 flex flex-col items-center p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-red-500 md:p-8 lg:p-16 xl:px-24 bg-opacity-70 top-1/2 left-1/2">
            <p className="text-xl md:text-3xl lg:text-5xl font-display">
              {data.datoCmsHomepage.heroText}
            </p>
            <ArrowLink
              destination="/shop/"
              text="Shop"
              className="mt-4 text-white lg:text-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center p-4 my-8 lg:my-16 sm:flex-row sm:flex-wrap"
          variants={fade}
          transition="easeInOut"
        >
          <ShopCategories
            asCards={true}
            linkClasses="w-full sm:w-1/2 border-8 lg:w-1/4 md:w-1/3 border-white"
            nameClassName="bg-opacity-70 text-white z-20 absolute bottom-0 left-0 w-full bg-red-500 p-3 font-semibold w-full flex flex-row space-x-2 items-center"
          />
        </motion.div>

        <motion.div className="" variants={fade} transition="easeInOut">
          <ZuckermausStory />
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage
