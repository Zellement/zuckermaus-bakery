import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/Seo"
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import { GatsbyImage } from "gatsby-plugin-image"
import ArrowLink from "../components/atoms/ArrowLink"
import ShopCategories from "../components/ShopCategories"
import ZuckermausStory from "../components/ZuckermausStory"
import Reviews from "../components/Reviews"

export const query = graphql`
  query {
    datoCmsHomepage {
      heroText
      heroButtonText
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH)
        alt
      }
    }
    allDatoCmsBlog(limit: 2) {
      edges {
        node {
          title
          slug
          excerpt
          meta {
            firstPublishedAt(formatString: "Do MMMM YYYY")
          }
          heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              imgixParams: {
                fit: "crop"
                crop: "focalpoint"
                w: "600"
                h: "340"
              }
            )
            alt
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { heroImage, heroButtonText, heroText } = data.datoCmsHomepage
  const blogposts = data.allDatoCmsBlog
  return (
    <>
      <Seo title="Home" />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className=""
      >
        {/* Hero */}
        <motion.div
          className="relative h-screen-5/10 md:h-screen-8/10"
          variants={fade}
          transition="easeInOut"
        >
          <GatsbyImage
            image={heroImage.gatsbyImageData}
            className="object-cover w-full h-full"
            alt={heroImage.alt ? heroImage.alt : ""}
          />
          <div className="absolute z-30 flex flex-col items-center w-10/12 p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-red-500 md:p-8 lg:p-16 xl:px-24 bg-opacity-70 top-1/2 left-1/2 md:w-7/10 lg:w-auto">
            <p className="text-xl text-center md:text-3xl lg:text-5xl font-display">
              {heroText}
            </p>
            <ArrowLink
              destination="/shop/"
              text={heroButtonText}
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
            linkClasses="w-full sm:w-1/2 border-8 lg:w-1/4 md:w-1/3 border-white lg:text-lg"
            nameClassName="bg-opacity-70 text-white z-20 absolute bottom-0 left-0 w-full bg-red-500 p-3 font-semibold w-full flex flex-row space-x-2 items-center"
          />
        </motion.div>

        <motion.section className="" variants={fade} transition="easeInOut">
          {/* Zuckermaus Story */}
          <ZuckermausStory />

          {/* Latest blog posts */}
          <motion.div className="container p-8 my-8 lg:p-16 lg:my-16">
            <h2 className="text-red-500">Latest from the blog</h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 inverted-tiles"
              variants={fade}
              transition="easeInOut"
            >
              {blogposts.edges.map((blogitem, index) => (
                <motion.div
                  key={index}
                  variants={fade}
                  transition="easeInOut"
                  className="flex transition duration-300 inverted-tiles__article bg-sugar-pink-100"
                >
                  <Link
                    to={"/blog/" + blogitem.node.slug + "/"}
                    className="relative flex flex-col flex-1 p-16 lg:p-24"
                  >
                    <GatsbyImage
                      image={blogitem.node.heroImage.gatsbyImageData}
                      backgroundColor="#F3B8D5"
                      alt={
                        blogitem.node.heroImage.alt
                          ? blogitem.node.heroImage.alt
                          : ""
                      }
                      className="block object-cover w-full h-full mb-px"
                    />

                    <div className="relative w-full h-auto mt-8">
                      <h2 className="font-sans">{blogitem.node.title}</h2>

                      <p>{blogitem.node.excerpt}</p>
                      <span className="absolute top-0 left-0 mt-2 -ml-4 origin-top-left transform rotate-90 text-sugar-pink-600">
                        {blogitem.node.meta.firstPublishedAt}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reviews */}
          <Reviews />
        </motion.section>
      </motion.section>
    </>
  )
}

export default IndexPage
