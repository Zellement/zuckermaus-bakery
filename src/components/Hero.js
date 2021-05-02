import React from "react"
import { motion } from "framer-motion"
import { hero, hero__header, hero__subline } from "../helpers/transitionHelper"
import ArrowLink from "./atoms/ArrowLink"
import AustrianFlag from "./atoms/icons/AustrianFlag"

export default function Hero({
  header,
  subpage,
  className,
  backDestination,
  backText,
  secondaryName
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
                { secondaryName ? <span className="flex block space-x-2 text-xl text-red-500 md:text-2xl"><AustrianFlag className="w-6" /> <span>{ secondaryName }</span></span> : null }
              </span>
            </>
          )}
        </motion.h1>

        {backDestination ? (
          <motion.div className="mt-4 text-sugar-pink-800" variants={hero__subline}>
            <ArrowLink
              arrowLeft={true}
              destination={backDestination}
              text={backText}
            />
          </motion.div>
        ) : null}
      </div>
    </motion.div>
  )
}
