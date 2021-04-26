import React from "react"
import { motion } from "framer-motion"
import { hero, hero__header } from "../helpers/transitionHelper"

export default function Hero({ header, subheader, subpage, className }) {
  return (
  <motion.div variants={hero} className={"relative border-t-2 p-8 border-gray-100 mt-4 " + className}>
    <div className="container relative ">
      <motion.h1
        variants={hero__header}
        className="flex flex-col"
      >
        
        {subpage ? (
          <>
          <span className="text-lg font-black text-sugar-pink-600 md:text-xl">{header}</span>
          <span className="text-3xl font-black text-sugar-pink-900 md:text-4xl">
            {subpage}
          </span>
          </>
        ) : 
        <>
          <span className="text-3xl font-black text-sugar-pink-900 md:text-4xl">{header}</span>
        </>
          }
      </motion.h1>

    </div>
  </motion.div>
  )
}
