import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import ContactForm from "../components/ContactForm"
import Hero from "../components/Hero"
import { StructuredText } from "react-datocms"
import ArrowLink from "../components/atoms/ArrowLink"

export const query = graphql`
  query {
    datoCmsContactPage {
      heroText
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

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Contact" />
      <Hero header={data.datoCmsContactPage.heroText} />
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="container"
      >
        <motion.div
          className="flex flex-col p-8 2xl:flex-row 2xl:space-x-16"
          variants={fade}
          transition="easeInOut"
        >
          <div className="w-full max-w-screen-md 2xl:w-1/3">
            <StructuredText
              data={data.datoCmsContactPage.content}
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
          <div className="w-full 2xl:w-2/3">
            <ContactForm />
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage
