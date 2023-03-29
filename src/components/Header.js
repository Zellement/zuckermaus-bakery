import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from "./Nav"
// import ZuckermausLogo from "./atoms/Logo"
import ZuckermausLogo from "../images/ZuckermausLogo.svg"
import Basket from "./Basket"

const Header = ({ topBarLine, topBarLineLeft, shopClosed, closedTopBarMessage, dateReOpening }) => (
  <header className="relative z-40 w-full bg-white lg:fixed">
    <div className="fixed z-40 w-full p-2 bg-red-500 lg:flex lg:relative">
      {shopClosed ?
        <div className="container flex flex-col items-center justify-end w-full gap-2 lg:flex-row lg:gap-6 xl:gap-10">
          <p className="text-xs font-bold text-white md:text-sm xl:text-base">{ closedTopBarMessage }</p>
          {dateReOpening ? 
          <p className="text-xs font-bold text-white md:text-sm xl:text-base">Re-Opening: { dateReOpening }</p>
          : null }
        </div>
        : 
        <div className="container flex flex-col items-center justify-between w-full gap-2 lg:flex-row lg:gap-6 xl:gap-10">
          <p className="text-xs font-bold text-center text-white md:text-sm 3xl:text-base">{ topBarLineLeft }</p>
          <p className="text-xs font-bold text-center text-white md:text-sm 3xl:text-base">{ topBarLine }</p>
          <Basket />
        </div>
      }
    </div>

    <div className="container relative py-8 pt-32 bg-white lg:p-8">
      <div className="flex flex-col items-center md:space-y-4 lg:justify-between lg:space-y-0 lg:flex-row">
        <Link
          className="inline-block w-full mx-auto max-w-72 lg:ml-0"
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
