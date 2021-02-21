import React from "react"
import SEO from "../components/SEO"
import { motion } from 'framer-motion'
import { fade } from "../helpers/transitionHelper"


const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="container p-8 lg:pt-56"
      >
        <motion.div 
          className="content"
          variants={fade}
          transition="easeInOut"
        >
          <p className="pl-3 text-lg border-l-2 border-black md:text-xl">An opinionated starter for Gatsby v2 with TailwindCSS, PostCSS and Framer Motion page transitions.</p>
        </motion.div>

        <motion.div 
          className="content"
          variants={fade}
          transition="easeInOut"
        >
          <hr className="block my-8" />
        </motion.div>

        <motion.div 
          className="content"
          variants={fade}
          transition="easeInOut"
        >
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <h2>Lorem ipsum dolor sit amet</h2>
          
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage