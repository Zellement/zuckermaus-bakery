import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ImQuotesLeft } from "react-icons/im"

export default function Reviews() {
  const data = useStaticQuery(graphql`
    query ReviewsQuery {
      datoCmsGlobal {
        review {
          name
          text
        }
      }
    }
  `)
  const review = data.datoCmsGlobal
  return (
    <div className="container">
      <div className="flex flex-col w-full p-8 space-y-12 text-gray-700 lg:space-y-0 lg:space-x-12 lg:p-16 lg:flex-row">
        {review.review.map((reviewitem, index) => (
          <div key={index} className="flex-1">
            <p className="text-lg font-display lg:text-xl">{reviewitem.name}</p>

            <div className="relative flex flex-row mt-2 space-x-2">
              <ImQuotesLeft className="absolute top-0 left-0 text-4xl opacity-10" />
              <p className="pl-16">{reviewitem.text}</p>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  )
}
