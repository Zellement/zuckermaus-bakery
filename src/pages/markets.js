import React from "react"
import { motion } from "framer-motion"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

import Hero from "../components/Hero"
import { fade } from "../helpers/transitionHelper"
import MarketsUpcoming from "../components/MarketsUpcoming"
import MarketsPast from "../components/MarketsPast"

export default function MarketsPage({ data }) {
  const { introduction } = data.datoCmsMarketsPage
  return (
    <>
      <Seo title={`Markets`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <Hero header="Markets" introduction={introduction} />

        <motion.section
          className="container flex flex-col p-8 lg:p-16"
          variants={fade}
          transition="easeInOut"
        >
          <h2>Upcoming Markets</h2>
          {data.markets.edges.map((market, index) => (
            <MarketsUpcoming
              key={index}
              marketDate={market.node.date}
              marketLocation={market.node.location}
              marketNotes={market.node.notes}
              marketVenue={market.node.venue}
            />
          ))}
          <h2>Did you catch us at these markets?</h2>
          {data.markets.edges.map((market, index) => (
            <MarketsPast
              key={index}
              marketDate={market.node.date}
              marketLocation={market.node.location}
              marketNotes={market.node.notes}
              marketVenue={market.node.venue}
            />
          ))}
        </motion.section>
      </motion.div>
    </>
  )
}

export const query = graphql`
  query MarketsQuery {
    datoCmsMarketsPage {
      introduction
    }
    markets: allDatoCmsMarket {
      edges {
        node {
          id
          venue
          times
          date(formatString: "X")
          notes
          location {
            latitude
            longitude
          }
        }
      }
    }
  }
`
// (formatString: "Do MMMM YYYY")