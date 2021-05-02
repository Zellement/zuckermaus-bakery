import React from "react"
import { Link } from "gatsby"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { IoMdCloseCircleOutline } from "react-icons/io"
import ShopCategories from "./ShopCategories"

const Nav = class extends React.Component {
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const menuActive = this.state.showMenu
      ? "translate-x-1/10 shadow-xl md:shadow-none md:translate-x-0"
      : "translate-x-full md:translate-x-0 md:shadow-none md:block"
    const burgerActive = this.state.showMenu ? "bg-sugar-pink text-red-800" : ""
    const burgerIcon = this.state.showMenu ? "hidden" : "inline-block"
    const closeIcon = this.state.showMenu ? "inline-block" : "hidden"
    return (
      <nav className="lg:flex lg:content-end lg:justify-end lg:flex-col lg:p-0 nav">
        <div
          className={`bg-red md:bg-none duration-300 transition-all transform fixed top-0 left-0 z-40 w-full h-screen p-6 ease-in md:relative md:top-auto md:left-auto md:block md:w-full md:h-auto md:p-0 md:bg-transparent text-white ${menuActive}`}
        >
          <ul className="text-lg md:bg-none md:flex md:w-full md:flex-row md:justify-start md:items-stretch md:text-sm xl:text-lg lg:space-x-4">
            <li>
              <Link
                className="block py-2 font-bold text-white md:text-black md:px-3 md:hover:text-red-500"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                className="block py-2 font-bold text-white md:text-black md:px-3 md:hover:text-red-500 shop-link"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                partiallyActive={true}
                to="/shop/"
              >
                Shop
              </Link>

            <ul className="my-2 subnav md:hidden hover:block md:absolute md:m-0 md:top-full md:left-1/2 md:-translate-x-1/2 md:transform md:w-64 md:bg-white category-filter md:shadow-xl">
                <ShopCategories linkClasses="space-x-2 text-sugar-pink-200 text-xs md:text-black p-2 md:px-4 md:py-3 md:border-l-2 md:border-red-500 md:hover:border-black md:hover:border-l-4 transition duration-300 md:hover:bg-sugar-pink-100 md:text-sm" className="flex flex-row flex-wrap p-8 md:space-x-2 lg:w-full xl:justify-between" />
              </ul>
            </li>
            <li>
              <Link
                className="block py-2 font-bold text-white md:text-black md:px-3 md:hover:text-red-500"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                to="/markets/"
              >
                Markets
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 font-bold text-white md:text-black md:px-3 md:hover:text-red-500"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                to="/blog/"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 font-bold text-white md:text-black md:px-3 md:hover:text-red-500"
                onClick={this.toggleMenu}
                activeClassName="is-active"
                to="/contact/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          aria-label="Navigation menu button"
          tabIndex={0}
          role="button"
          className={`${burgerActive} outline-none rounded fixed bottom-0 mb-2 mr-2 right-0 z-50 block text-white cursor-pointer bg-red md:hidden p-4`}
          onClick={this.toggleMenu}
          onKeyDown={this.toggleMenu}
        >
          <span className="text-xs uppercase">Menu</span>{" "}
          <HiOutlineMenuAlt1 className={`${burgerIcon} -mt-1`} />{" "}
          <IoMdCloseCircleOutline className={`${closeIcon} -mt-1`} />
        </div>
      </nav>
    )
  }
}

export default Nav
