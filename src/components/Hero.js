import React from "react"
import { motion } from "framer-motion"
import { hero, hero__header, hero__subline } from "../helpers/transitionHelper"

export default function Hero({ header, subheader, subpage, className }) {
  return (
  <motion.div variants={hero} className={"relative bg-red-500 " + className}>
    <div className="container relative h-20 px-8 md:h-32 lg:h32 2xl:h-48">
      <motion.h1
        variants={hero__header}
        className="absolute bottom-0 left-0 ml-8 -mb-5 text-5xl font-light pointer-events-none text-sugar-pink font-display md:text-8xl md:-mb-8 lg:text-10xl lg:-mb-11 2xl:text-15xl 2xl:-mb-17"
      >
        {header}
        {subpage ? (
          <span className="text-lg text-white md:text-xl lg:text-2xl 2xl:text-4xl 2xl:-ml-40 -ml-28">
            {subpage}
          </span>
        ) : null}
      </motion.h1>

      <motion.span
        variants={hero__subline}
        className="absolute bottom-0 right-0 mr-8 -mb-4 text-sm font-light leading-none text-red-500 pointer-events-none font-display md:text-xl md:-mb-6 lg:-mb-8 lg:text-3xl 2xl:text-4xl 2xl:-mb-11"
      >
        {subheader}
      </motion.span>
    </div>
  </motion.div>
  )
}
