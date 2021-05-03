import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Review from "./atoms/Review"

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
            <Review name={reviewitem.name} text={reviewitem.text} />
          </div>
        ))}
        ;
      </div>
    </div>
  )
}
