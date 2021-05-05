import React from "react"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

import Hero from "../components/Hero"
import { container } from "../helpers/transitionHelper"

const item = {
  hidden: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}
const item__product = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function BlogPage({ data }) {
  const blogposts = data.allDatoCmsBlog

  return (
    <>
      <Seo title={`Blog`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <Hero header="Blog" />

        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 inverted-tiles"
            variants={item}
            transition="easeInOut"
          >
            {blogposts.edges.map((blogitem, index) => (
              <Link
                to={blogitem.node.slug + "/"}
                key={index}
                className="relative flex flex-col flex-1 p-16 lg:p-24 bg-sugar-pink-100 inverted-tiles__article"
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
                    { blogitem.node.meta.firstPublishedAt }
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </motion.section>
      </motion.div>
    </>
  )
}

export const query = graphql`
  query BlogQuery {
    allDatoCmsBlog {
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
