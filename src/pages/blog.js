import React from "react"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import Seo from "../components/Seo"
import GalleryCarousel from "../components/GalleryCarousel"
import IconVegetarian from "../components/atoms/icons/Vegetarian"
import IconVegan from "../components/atoms/icons/Vegan"
import IconGlutenFree from "../components/atoms/icons/GlutenFree"
import {
  IconBestSeller,
  IconTrendingNow,
} from "../components/atoms/icons/Trends"
import Hero from "../components/Hero"
import { container } from "../helpers/transitionHelper"
import AddToBasket from "../components/atoms/AddToBasket"
import AustrianFlag from "../components/atoms/icons/AustrianFlag"
import ArrowLink from "../components/atoms/ArrowLink"

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
            className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3"
            variants={item}
            transition="easeInOut"
          >
            {blogposts.edges.map((blogitem, index) => (
              <div key={index} className="flex-1">
                { blogitem.node.title }
              </div>
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
        }
      }
    }
  }
`
