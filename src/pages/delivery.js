import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import Hero from "../components/Hero"
import { StructuredText } from "react-datocms"
import ArrowLink from "../components/atoms/ArrowLink"
import { GatsbyImage } from "gatsby-plugin-image";

export const query = graphql`
  query {
    datoCmsDeliveryPage {
      heroText
      mainImage {
        gatsbyImageData(layout: CONSTRAINED, width: 1000, height: 1000)
        alt
      }
      content {
        value
        links
        blocks {
          ... on DatoCmsArrowLink {
            __typename
            id: originalId
            linkDestination {
              ... on DatoCmsProductCategory {
                id
                slug
                model {
                  apiKey
                }
              }
              ... on DatoCmsProduct {
                id
                slug
                model {
                  apiKey
                }
              }
              ... on DatoCmsBlog {
                id
                slug
                model {
                  apiKey
                }
              }
            }
            linkDestinationCustom
            linkText
          }
        }
      }
    }
  }
`

const DeliveryPage = ({ data }) => {
  return (
    <>
      <Seo title="Delivery" />
      <motion.div initial="initial" animate="enter" exit="exit">
      <Hero header={data.datoCmsDeliveryPage.heroText} className="border-b-2" />
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="container"
      >
        <motion.div
          className="flex flex-col p-8 lg:flex-row lg:space-x-16"
          variants={fade}
          transition="easeInOut"
        >
          <div className="w-full content lg:w-3/5">
            <StructuredText
              data={data.datoCmsDeliveryPage.content}
              renderBlock={({ record }) => {
                switch (record.__typename) {
                  case "DatoCmsArrowLink":
                    return (
                      <div className="">
                        {record.linkDestination ? (
                          (() => {
                            if (
                              record.linkDestination.model.apiKey === "product"
                            ) {
                              return (
                                <div className="my-8">
                                  <ArrowLink
                                    destination={
                                      "/shop/product/" +
                                      record.linkDestination.slug +
                                      "/"
                                    }
                                    text={record.linkText}
                                  />
                                </div>
                              )
                            } else if (
                              record.linkDestination.model.apiKey === "blog"
                            ) {
                              return (
                                <div className="my-8">
                                  <ArrowLink
                                    destination={
                                      "/blog/" +
                                      record.linkDestination.slug +
                                      "/"
                                    }
                                    text={record.linkText}
                                  />
                                </div>
                              )
                            } else if (
                              record.linkDestination.model.apiKey ===
                              "product_category"
                            ) {
                              return (
                                <div className="my-8">
                                  <ArrowLink
                                    destination={
                                      "/shop/" +
                                      record.linkDestination.slug +
                                      "/"
                                    }
                                    text={record.linkText}
                                  />
                                </div>
                              )
                            }
                          })()
                        ) : (
                          <div className="my-8">
                            <ArrowLink
                              destination={record.linkDestinationCustom}
                              text={record.linkText}
                              newTab={true}
                            />
                          </div>
                        )}
                      </div>
                    )
                }
              }}
            />
          </div>
          <div className="relative w-full lg:w-2/5">
            <div className="absolute z-10 w-full h-full bg-red-500 bg-opacity-80"></div>
              <GatsbyImage
                image={data.datoCmsDeliveryPage.mainImage.gatsbyImageData}
                backgroundColor="#F3B8D5"
                alt={data.datoCmsDeliveryPage.mainImage.alt ? data.datoCmsDeliveryPage.mainImage.alt : "Zuckermaus Bakery"}
                className="block object-cover w-full h-full mb-px" />
            </div>
        </motion.div>
      </motion.section>
      </motion.div>
    </>
  )
}

export default DeliveryPage
