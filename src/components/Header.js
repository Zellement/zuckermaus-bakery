import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from "./Nav"
// import ZuckermausLogo from "./atoms/Logo"
import ZuckermausLogo from "../images/ZuckermausLogo.svg"
import Basket from "./Basket"

const Header = ({ siteTitle, topBarLine }) => (
  <header className="relative z-40 w-full bg-white lg:fixed">
    <div className="p-2 bg-red-500 lg:flex">
      <div className="container flex flex-row items-center justify-end w-full space-x-4">
        <p className="font-bold text-white lg:text-lg">{ topBarLine }</p>
        <Basket />
      </div>
    </div>

    <div className="container relative py-8 bg-white">
      <div className="flex flex-col items-center md:space-y-4 lg:justify-between lg:space-y-0 lg:flex-row">
        <Link
          className="z-30 inline-block w-full p-4 mx-auto max-w-84 lg:ml-0 lg:pl-8"
          to="/"
        >
          <ZuckermausLogo />
        </Link>

        <Nav />
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
