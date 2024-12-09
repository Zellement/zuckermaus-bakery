import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { AnimatePresence } from 'framer-motion'
// import InstagramFeed from "../components/InstagramFeed"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/main.css"

export const SnipcartErrorCustomizer = () => {
  useEffect(() => {
    const handleSnipcartReady = () => {
      if (window.Snipcart) {
              window.Snipcart.events.on('error', (error) => {
                  if (error.code === 'disabled_country') {
                      error.message = "We currently don't ship to your country. Please contact us for more information.";
                  }
              });
          }
      };

      // Listen for Snipcart's readiness
      document.addEventListener('snipcart.ready', handleSnipcartReady);

      // Cleanup on component unmount
      return () => {
          document.removeEventListener('snipcart.ready', handleSnipcartReady);
      };
  }, []);

  return null; // This component doesn't render anything
}

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
        <SnipcartErrorCustomizer />
      </div>
      {/* <InstagramFeed /> */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
