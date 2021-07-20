import React from "react"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

import Hero from "../components/Hero"
import { fade } from "../helpers/transitionHelper"

export default function BlogPage({ data }) {
  const blogposts = data.allDatoCmsBlog

  return (
    <>
      <Seo title={`Blog`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <Hero header="Blog" />

        <motion.section
          className="container grid grid-cols-1 md:grid-cols-2 inverted-tiles"
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
        </motion.section>
      </motion.div>
    </>
  )
}

export const query = graphql`
  query BlogQuery {
    allDatoCmsBlog(sort: {fields: meta___firstPublishedAt, order: ASC}) {
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
