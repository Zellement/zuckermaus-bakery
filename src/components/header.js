import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Nav from "../components/nav"
import { MdShoppingCart } from 'react-icons/md'

const Header = ({ siteTitle }) => (
  <header className="py-8 md:py-16">
    <div className="fixed cursor-pointer Header__summary snipcart-summary snipcart-checkout">
      <div className="Header__summary__title"><MdShoppingCart className="text-4xl" /></div>
      <div className="Header__summary__line">
        Number of items: <span className="snipcart-total-items"></span>
      </div>
      <div className="Header__summary__line">
        Total price: <span className="snipcart-total-price"></span>
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
