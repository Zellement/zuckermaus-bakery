import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from "./Nav"
import ZuckermausLogo from "./atoms/Logo"
import Basket from "./Basket"

const Header = ({ siteTitle }) => (
  <header className="w-full lg:fixed bg-red lg:z-50">

    <div className="container relative py-8">
      <div className="flex flex-col items-center md:space-y-4 lg:justify-between lg:space-y-0 lg:flex-row">

        <Link
          className="inline-block p-4 mx-auto lg:ml-0 lg:pl-8"
          to="/"
        >
          <ZuckermausLogo className="w-full h-auto fill-current text-sugar-pink" />
        </Link>

        <Nav />
        <Basket />

      </div>
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
