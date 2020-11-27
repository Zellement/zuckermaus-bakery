import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Nav from "../components/nav"
import { MdShoppingCart } from 'react-icons/md'

const Header = ({ siteTitle }) => (
  <header className="py-8 md:py-16">
    <div className="fixed top-0 right-0 z-10 flex flex-row mt-4 bg-white cursor-pointer Header__summary snipcart-summary snipcart-checkout">
      <div className="Header__summary__title"></div>
      <div className="flex flex-row Header__summary__line">
        <div className="relative flex flex-row items-center p-2 pr-4 mr-6 border border-black">
          <MdShoppingCart className="text-2xl" /> <span className="snipcart-total-price"></span>
          <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 -mt-2 -mr-2 text-sm text-center bg-red-200 border border-black rounded-full snipcart-items-count"></span>
        </div>
      </div>
      <div className="Header__summary__line">
        
      </div>
    </div>

    <div className="container">
      <div className="flex flex-wrap items-center mb-4">
        <motion.button
          className="block w-5 h-5 mr-3 bg-black rounded"
          animate={{ rotate: 180 }}
          transition={{
            loop: Infinity,
            duration: 2,
            ease: "anticipate",
          }}
        />

        <Link
          className="block inline-block text-lg font-bold md:text-xl"
          to="/"
        >
          {siteTitle}
        </Link>
      </div>

      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
