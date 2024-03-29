import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HTMLContent } from "./Content"
import Handmade from "./atoms/icons/Handmade"
import AustrianFlag from "./atoms/icons/AustrianFlag"
import Delivery from "./atoms/icons/Delivery"
import ArrowLink from "./atoms/ArrowLink"

export default function ZuckermausStory() {
  const data = useStaticQuery(graphql`
    query StoryQuery {
      datoCmsGlobal {
        copy
        title
        title1
        text1
        title2
        text2
        title3
        text3
      }
    }
  `)
  const story = data.datoCmsGlobal
  return (
    <div className="w-full p-8 bg-pink-100 md:p-16 text-sugar-pink-800">
      <div className="container flex flex-col gap-16 lg:gap-24 lg:flex-row">
        <div className="flex w-full lg:w-1/2 content">
          <div className="flex flex-col my-auto">
            <h1 className="text-xl font-display lg:text-3xl">{story.title}</h1>
            <HTMLContent content={story.copy} className="content" />
            <ArrowLink
              className="self-start"
              destination="/blog/it-all-started-in-an-austrian-vineyard/"
              text="Read our full story"
            />
          </div>
        </div>
        <div className="flex flex-col w-full text-lg lg:w-1/2">
          <div className="flex flex-col my-auto">
            <div className="flex flex-col items-center py-8 space-y-4 text-center border-b lg:py-12 lg:space-x-8 lg:text-left lg:items-start lg:space-y-0 lg:flex-row border-sugar-pink-500">
              <div className="w-10">
                <Handmade className="w-10 mt-1" />
              </div>
              <div className="flex flex-col">
                <p className="m-0 text-xl font-display">{story.title1}</p>
                <p>{story.text1}</p>
              </div>
            </div>
            <div className="flex flex-col items-center py-8 space-y-4 text-center border-b lg:py-12 lg:space-x-8 lg:text-left lg:items-start lg:space-y-0 lg:flex-row border-sugar-pink-500">
              <div className="w-10">
                <AustrianFlag className="w-10 mt-1" />
              </div>
              <div className="flex flex-col">
                <p className="m-0 text-xl font-display">{story.title2}</p>
                <p>{story.text2}</p>
              </div>
            </div>
            <div className="flex flex-col items-center py-8 space-y-4 text-center lg:py-12 lg:space-x-8 lg:text-left lg:items-start lg:space-y-0 lg:flex-row">
              <div className="w-10">
                <Delivery className="w-10 mt-1" />
              </div>
              <div className="flex flex-col">
                <p className="m-0 text-xl font-display">{story.title3}</p>
                <p>{story.text3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
