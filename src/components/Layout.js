import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { AnimatePresence } from 'framer-motion'
// import InstagramFeed from "../components/InstagramFeed"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/main.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query GlobalQuery {
      site {
        siteMetadata {
          title
        }
      }
      datoCmsGlobal {
        topBarLine
        topBarLineLeft
        closeTheShop
        dateReOpening(formatString: "DD/MM/Y")
        closedTopBarMessage
      }
    }
  `)

  return (
    <>
      <Header siteTitle={ data.site.siteMetadata.title } shopClosed={data.datoCmsGlobal.closeTheShop} closedTopBarMessage={data.datoCmsGlobal.closedTopBarMessage} dateReOpening={data.datoCmsGlobal.dateReOpening} topBarLine={ data.datoCmsGlobal.topBarLine } topBarLineLeft={ data.datoCmsGlobal.topBarLineLeft } />
      <div className="app">
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
      </div>
      {/* { process.env.GATSBY_MY_ENVIRONMENT === "Development" ? null : <InstagramFeed /> } */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
