import React from "react"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { fade } from "../helpers/transitionHelper"
import Seo from "../components/Seo"
import Hero from "../components/Hero"


export default function DealsPage({ data, pageContext }) {
  const deals = data.allDatoCmsDeal

  return (
    <>
      <Seo title={pageContext.title ? `${pageContext.title} | Shop` : `Shop`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <Hero className="" header="Deals" subpage={pageContext.title} />

        <motion.section
          variants={fade}
          transition="easeInOut"
          className="container grid grid-cols-1 gap-10"
        >
          {deals.edges.map(({ node: deal }) => (
            <Link to={deal.slug + "/"} className="relative p-8 text-white bg-red-500 lg:p-20 hover:bg-rose-pink-700">
              <div className="absolute inset-0 w-full h-full">
                <GatsbyImage
                  image={deal.mainImage.gatsbyImageData}
                  alt={
                    deal.mainImage.alt ? deal.mainImage.alt : "Zuckermaus Bakery"
                  }
                  className="object-cover w-full h-full  opacity-40"
                />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-7xl">{deal.dealName}</h2>
                <p className="text-xl">{deal.description}</p>
              </div>
            </Link>
          ))}
        </motion.section>
      </motion.div>
    </>
  )
}

export const query = graphql`
  query MyQuery {
  allDatoCmsDeal {
    edges {
      node {
        id
        dealName
        description
        slug
        mainImage {
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
