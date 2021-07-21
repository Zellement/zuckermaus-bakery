import React from "react"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { fade } from "../helpers/transitionHelper"
import Seo from "../components/Seo"
import GalleryCarousel from "../components/GalleryCarousel"
import IconVegetarian from "../components/atoms/icons/Vegetarian"
import IconVegan from "../components/atoms/icons/Vegan"
import IconGlutenFree from "../components/atoms/icons/GlutenFree"
import { IconBestSeller } from "../components/atoms/icons/Trends"
import Hero from "../components/Hero"
import AddToBasket from "../components/atoms/AddToBasket"
import AustrianFlag from "../components/atoms/icons/AustrianFlag"
import ArrowLink from "../components/atoms/ArrowLink"

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
              <GatsbyImage
                image={deal.mainImage.gatsbyImageData}
                alt={
                  deal.mainImage.alt ? deal.mainImage.alt : "Zuckermaus Bakery"
                }
                className="absolute inset-0 object-cover w-full h-full opacity-40"
              />
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
