import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { motion } from "framer-motion"
import Hero from "../components/Hero"
import { GatsbyImage } from "gatsby-plugin-image"
import { fade } from "../helpers/transitionHelper"
import { StructuredText } from "react-datocms"
import Review from "../components/atoms/Review"
import ArrowLink from "../components/atoms/ArrowLink"

export default function BlogPost({ data }) {
  return (
    <>
      <Seo title={data.article.title} />
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="overflow-hidden"
      >
        <Hero
          className="border-b-2"
          header={data.article.title}
          backText={"Back to blog"}
          backDestination={"/blog/"}
        />

        <motion.div
          variants={fade}
          transition="easeInOut"
          className="container max-w-screen-lg p-8 lg:w-full lg:p-16 content"
        >
          <StructuredText
            data={data.article.content}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case "DatoCmsReview":
                  return (
                    <div className="w-full max-w-screen-sm py-4 pl-8 my-8 border-l-4 border-red-500 lg:my-16">
                      <Review name={record.name} text={record.text} />
                    </div>
                  )
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
                                    "/blog/" + record.linkDestination.slug + "/"
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
                                    "/shop/" + record.linkDestination.slug + "/"
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
                case "DatoCmsArticleImage":
                  return (
                    <div className="my-8 lg:my-16">
                      <GatsbyImage
                        image={record.articleImage.gatsbyImageData}
                        alt={record.alt ? record.alt : "Zuckermaus Bakery"}
                        className="block object-cover w-full h-full mb-px"
                      />

                      {record.articleImage.title ? (
                        <span className="text-sm">
                          {record.articleImage.title}
                        </span>
                      ) : null}
                    </div>
                  )
                default:
                  return null
              }
            }}
          />
        </motion.div>
      </motion.div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    article: datoCmsBlog(slug: { eq: $slug }) {
      title
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
          ... on DatoCmsArticleImage {
            __typename
            id: originalId
            articleImage {
              gatsbyImageData(layout: CONSTRAINED, imgixParams: { w: "1000" })
              alt
              title
            }
          }
          ... on DatoCmsReview {
            __typename
            id: originalId
            name
            text
          }
        }
      }
    }
  }
`
