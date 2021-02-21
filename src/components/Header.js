import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from "./Nav"
// import ZuckermausLogo from "./atoms/Logo"
import ZuckermausLogo from '../images/ZuckermausLogo.svg'
import Basket from "./Basket"

const Header = ({ siteTitle }) => (
  <header className="relative w-full lg:fixed bg-red-500 z-40">

    <div className="container relative py-8 z-40">
      <div className="flex flex-col items-center md:space-y-4 lg:justify-between lg:space-y-0 lg:flex-row">

        <Link
          className="z-30 inline-block w-full p-4 mx-auto max-w-84 xl:max-w-screen-xs lg:ml-0 lg:pl-8"
          to="/"
        >
          <ZuckermausLogo />
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
