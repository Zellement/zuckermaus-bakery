import React from "react"
import { motion } from "framer-motion"
import { hero, hero__header, hero__subline } from "../helpers/transitionHelper"
import ArrowLink from "./atoms/ArrowLink"

export default function Hero({
  header,
  subpage,
  className,
  backDestination,
  backText,
}) {
  return (
    <motion.div
      variants={hero}
      className={"relative border-t-2 border-gray-100 mt-4 " + className}
    >
      <div className="container relative p-8">
        <motion.h1 variants={hero__header} className="flex flex-col m-0">
          {subpage ? (
            <>
              <span className="text-lg font-black text-sugar-pink-600 md:text-xl">
                {header}
              </span>
              <span className="text-3xl font-black text-sugar-pink-900 md:text-4xl">
                {subpage}
              </span>
            </>
          ) : (
            <>
              <span className="text-3xl font-black text-sugar-pink-900 md:text-4xl">
                {header}
              </span>
            </>
          )}
        </motion.h1>

        { backDestination ? <motion.div variants={hero__subline}><ArrowLink arrowLeft={true} destination={backDestination} text={backText} /></motion.div> : null }
            
      </div>
    </motion.div>
  )
}
