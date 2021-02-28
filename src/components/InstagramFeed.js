import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AiFillHeart } from "react-icons/ai"
import Img from "gatsby-image"

export default function InstagramFeed() {
  const insta = useStaticQuery(
    graphql`
      query {
        allInstaNode(limit: 4, sort: { order: DESC, fields: timestamp }) {
          edges {
            node {
              id
              caption
              likes
              preview
              timestamp
              original
              localFile {
                childImageSharp {
                  id
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className="px-8 pb-8 my-16 lg:pb-16 bg-sugar-pink-100 lg:px-16">
    <div className="container relative pt-16 lg:pt-40 xl:pt-48 2xl:pt-56">
      <h2 className="box__header text-sugar-pink-600">
        Instagram
      </h2>
      <div className="flex flex-col sm:grid sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {insta.allInstaNode.edges.map(({ node: instapost }) => (
          <a
            key={instapost.id}
            href={instapost.original}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="relative">
              <Img
                className="w-full object-fit"
                fluid={instapost.localFile.childImageSharp.fluid}
                alt={instapost.localFile.childImageSharp.alt}
              />
              <div className="absolute bottom-0 right-0 flex flex-row items-center p-2 space-x-2 text-white">
                <AiFillHeart />
                <span>{instapost.likes}</span>
              </div>
            </div>
            <div className="p-8 text-2xs lg:pb-0">
              {instapost.caption}
              <svg
                className="mx-auto mt-8 fill-current text-sugar-pink-500"
                width="29"
                height="9"
                viewBox="0 0 29 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.8897 8.624C26.7617 8.624 28.4177 7.352 28.4177 5.504C28.4177 3.08 25.9217 1.112 22.8017 1.112C16.8737 1.112 8.06566 3.704 3.57766 3.704C1.77766 3.704 0.673656 3.296 0.673656 2.168C0.673656 1.784 0.793656 1.352 1.05766 0.8C1.05766 0.775999 1.00966 0.775999 1.00966 0.775999C0.721656 1.328 0.577656 1.88 0.577656 2.36C0.577656 4.304 2.66566 5.624 5.35366 5.624C10.8977 5.624 19.3217 2.864 24.2657 2.864C26.7137 2.864 28.2977 3.536 28.2977 5.528C28.2977 6.848 27.3617 7.304 26.3057 7.304C25.0097 7.304 23.5457 6.608 23.4017 5.888C23.0657 6.128 22.8497 6.584 22.8497 7.064C22.8497 7.808 23.4017 8.6 24.8897 8.624Z" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
    </div>
  )
}
