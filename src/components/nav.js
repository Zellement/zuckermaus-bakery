import React from "react"
import { Link } from "gatsby"
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const Nav = class extends React.Component {

  state = { showMenu : false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'block' : 'hidden md:block';
    const burgerActive = this.state.showMenu ? 'bg-sugar-pink text-red-800' : '';
    const burgerIcon = this.state.showMenu ? 'hidden' : 'inline-block';
    const closeIcon = this.state.showMenu ? 'inline-block' : 'hidden';
    return (     
    <nav className="lg:flex lg:content-end lg:justify-end lg:flex-col">
      <div className={`bg-red md:bg-none fixed top-0 left-0 z-10 w-full h-screen p-6 transition-all duration-100 ease-in md:relative md:top-auto md:left-auto md:block md:w-full md:h-auto md:p-0 md:bg-transparent text-white ${menuActive}`} >
        <ul className="text-3xl md:bg-none md:flex md:w-full md:flex-row md:justify-start md:items-stretch md:text-sm">
          <li>
            <Link className="block py-1 font-bold border-b border-red-400 md:border-b-0 md:text-white md:px-3 text-sugar-pink" onClick={this.toggleMenu} activeClassName="is-active" to="/">Home</Link>
          </li>
          <li>
            <Link className="block py-1 font-bold border-b border-red-400 md:border-b-0 md:text-white md:px-3 text-sugar-pink" onClick={this.toggleMenu} activeClassName="is-active" to="/shop/">Shop</Link>
          </li>
          <li>
            <Link className="block py-1 font-bold border-b border-red-400 md:border-b-0 md:text-white md:px-3 text-sugar-pink" onClick={this.toggleMenu} activeClassName="is-active" to="/events/">Events</Link>
          </li>
          <li>
            <Link className="block py-1 font-bold border-b border-red-400 md:border-b-0 md:text-white md:px-3 text-sugar-pink" onClick={this.toggleMenu} activeClassName="is-active" to="/our-story/">Our Story</Link>
          </li>
          <li>
            <Link className="block py-1 font-bold border-b border-red-400 md:border-b-0 md:text-white md:px-3 text-sugar-pink" onClick={this.toggleMenu} activeClassName="is-active" to="/sustainability/">Sustainability</Link>
          </li>
          <li>
            <Link className="block py-1 font-bold border-b border-red-400 md:border-b-0 md:text-white md:px-3 text-sugar-pink" onClick={this.toggleMenu} activeClassName="is-active" to="/blog/">Blog</Link>
          </li>
          <li>
            <Link className="block py-1 font-bold border-b border-red-400 md:border-b-0 md:text-white md:px-3 text-sugar-pink" onClick={this.toggleMenu} activeClassName="is-active" to="/contact/">Contact</Link>
          </li>
        </ul>
      </div>
      <div aria-label="Navigation menu button" tabIndex={0} role="button" className={`${burgerActive} fixed bottom-0 right-0 z-10 block text-white cursor-pointer bg-red md:hidden p-4`} onClick={this.toggleMenu} onKeyDown={this.toggleMenu}>
          <span className="text-xs uppercase">Menu</span> <HiOutlineMenuAlt1 className={`${burgerIcon} -mt-1`} /> <IoMdCloseCircleOutline className={`${closeIcon} -mt-1`} />
      </div>
    </nav>
  )}
}

export default Nav