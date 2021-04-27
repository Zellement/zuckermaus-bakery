import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from "./Nav"
// import ZuckermausLogo from "./atoms/Logo"
import ZuckermausLogo from "../images/ZuckermausLogo.svg"
import Basket from "./Basket"

const Header = ({ topBarLine }) => (
  <header className="relative z-40 w-full bg-white lg:fixed">
    <div className="p-2 bg-red-500 lg:flex">
      <div className="container flex flex-row items-center justify-end w-full space-x-4">
        <p className="text-xs font-bold text-white md:text-sm xl:text-base">{ topBarLine }</p>
        <Basket />
      </div>
    </div>

    <div className="container relative py-8 bg-white lg:p-8">
      <div className="flex flex-col items-center md:space-y-4 lg:justify-between lg:space-y-0 lg:flex-row">
        <Link
          className="z-30 inline-block w-full mx-auto max-w-72 lg:ml-0"
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
