import React from "react"
import Seo from "../components/Seo"
import { motion } from "framer-motion"
import { fade } from "../helpers/transitionHelper"
import ArrowLink from "../components/atoms/ArrowLink"
import Hero from "../components/Hero"

const NotFoundPage = () => (
  <>
      <Seo title={`Sorry, page not found`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <Hero className="" header="Sorry!" />

        <motion.section
          variants={fade}
          transition="easeInOut"
          className="container p-8"
        >
          <h1>Sorry, this page cannot be found.</h1>
            <ArrowLink
              destination="/"
              text="Go to the homepage"
              className="inline-block w-auto p-2 text-red-500"
            />
        </motion.section>
      </motion.div>
    </>
)

export default NotFoundPage
