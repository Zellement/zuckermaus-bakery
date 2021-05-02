import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import Img from "gatsby-image"
import ArrowLink from "../components/atoms/ArrowLink"

export const query = graphql`
  query {
    datoCmsHomepage {
      id
      heroButtonText
      heroImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      heroText
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />

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
          <Img
            className="object-cover w-full h-full"
            fluid={data.datoCmsHomepage.heroImage.fluid}
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

        <motion.div className="content" variants={fade} transition="easeInOut">
          <hr className="block my-8" />
        </motion.div>

        <motion.div className="content" variants={fade} transition="easeInOut">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <h2>Lorem ipsum dolor sit amet</h2>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage
