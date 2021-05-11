import React from "react"
import { motion } from "framer-motion"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

import Hero from "../components/Hero"
import { fade } from "../helpers/transitionHelper"
import MarketsUpcoming from "../components/MarketsUpcoming"
import MarketsPast from "../components/MarketsPast"
import GalleryCarousel from "../components/GalleryCarousel"

export default function MarketsPage({ data }) {
  const {
    introduction,
    upcomingMarketsTitle,
    pastMarketsTitle,
    gallery,
  } = data.datoCmsMarketsPage
  return (
    <>
      <Seo title={`Markets`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <Hero header="Markets" introduction={introduction} />

        <motion.section
          className="container flex flex-col p-8 lg:flex-row"
          variants={fade}
          transition="easeInOut"
        >
          <div className="w-full lg:w-1/2 lg:order-last lg:ml-12">
            <GalleryCarousel alt={gallery.alt} images={gallery} />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="font-sans">{upcomingMarketsTitle}</h2>
            {data.markets.edges.map((market, index) => (
              <MarketsUpcoming
                key={index}
                marketDate={market.node.date}
                marketLocation={market.node.location}
                marketNotes={market.node.notes}
                marketVenue={market.node.venue}
                marketTimes={market.node.times}
              />
            ))}
            <h3 className="pt-8 font-sans lg:pt-16">{pastMarketsTitle}</h3>
            {data.markets.edges.map((market, index) => (
              <MarketsPast
                key={index}
                marketDate={market.node.date}
                marketLocation={market.node.location}
                marketNotes={market.node.notes}
                marketVenue={market.node.venue}
                marketTimes={market.node.times}
              />
            ))}
          </div>
        </motion.section>
      </motion.div>
    </>
  )
}

export const query = graphql`
  query MarketsQuery {
    datoCmsMarketsPage {
      introduction
      upcomingMarketsTitle
      pastMarketsTitle
      gallery {
        gatsbyImageData(layout: CONSTRAINED, width: 1000, height: 1000)
        alt
      }
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
