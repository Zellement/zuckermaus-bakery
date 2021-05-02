import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HTMLContent } from "./Content"

export default function ZuckermausStory() {
  const story = useStaticQuery(graphql`
    query StoryQuery {
      datoCmsGlobal {
        copy
        title
      }
    }
  `)
  return (
    <div className="flex flex-col w-full p-8 bg-pink-100 md:p-16 text-sugar-pink-900">
      <div className="w-full lg:w-1/2 content">
        <h1 className="font-display">{story.datoCmsGlobal.title}</h1>
        <HTMLContent content={story.datoCmsGlobal.copy} />
      </div>
    </div>
  )
}
