import React from "react"
import { motion } from "framer-motion"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

import Hero from "../components/Hero"
import { fade } from "../helpers/transitionHelper"
import MarketsUpcoming from "../components/MarketsUpcoming"
import MarketsPast from "../components/MarketsPast"
import GalleryCarousel from "../components/GalleryCarousel"
import { HiLocationMarker } from "react-icons/hi"
import { AiFillClockCircle, AiFillCalendar } from "react-icons/ai"
import ArrowLink from "../components/atoms/ArrowLink"
import { HTMLContent } from "../components/Content"

export default function MarketsPage({ data }) {
  const {
    introduction,
    repeatMarketsTitle,
    upcomingMarketsTitle,
    pastMarketsTitle,
    gallery,
    repeatMarkets,
  } = data.datoCmsMarketsPage

  var upcomingMarketCount = 0
  var pastMarketCount = 0

  const dateNow = Date.now() / 1000

  for (var item of data.markets.edges) {
    if ( item.node.date > dateNow ) {
      upcomingMarketCount++
    }
    else {
      pastMarketCount++
    }
  }

  return (
    <>
      <Seo title={`Markets`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <Hero header="Markets" introduction={introduction} />

        <motion.section
          className="container p-8"
          variants={fade}
          transition="easeInOut"
        >
          <h2 className="font-sans text-red-500">{repeatMarketsTitle}</h2>

          <div className="grid grid-cols-1 mb-16 md:grid-cols-2 gap-8 lg:gap-16">
            {repeatMarkets.map((market, index) => (
              <div key={index} className="w-full border rounded-xl border-rose-pink-300 p-8 shadow-lg">
                <h3 className="flex flex-row items-center m-0 space-x-2 font-sans">
                  <HiLocationMarker className="opacity-50" /> <span>{market.venue}</span>

                </h3>

                <p className="text-base lg:text-lg mt-4 font-sans flex flex-row items-center space-x-2"><AiFillCalendar className="opacity-50" /> <span>{market.frequency}</span></p>
                <p className="text-base lg:text-lg font-sans m-0 flex flex-row items-center space-x-2"><AiFillClockCircle className="opacity-50" /> <span>{market.times}</span></p>

                {market.notes ? (
                  <HTMLContent className="mt-8" content={market.notes} />
                ) : null}

                

                <ArrowLink
                  text="See on a map"
                  newTab={true}
                  className="mt-4"
                  destination={
                    "https://maps.google.com/?q=" +
                    market.location.latitude +
                    "," +
                    market.location.longitude
                  }
                />
                        
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="container flex flex-col space-y-16 lg:space-y-0 p-8 lg:flex-row"
          variants={fade}
          transition="easeInOut"
        >
          <div className="w-full lg:w-1/2 lg:order-last lg:ml-12">
            <GalleryCarousel alt={gallery.alt} images={gallery} />
          </div>

          <div className="w-full lg:w-1/2">
            { upcomingMarketCount > 0 ?
            <>
              <h3 className="font-sans text-rose-pink-500 m-0">{upcomingMarketsTitle}</h3>
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
            </>
            : null }
            { pastMarketCount > 0 ?
            <>
            <h3 className="pt-8 font-sans lg:pt-16 text-rose-pink-500 m-0">{pastMarketsTitle}</h3>
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
            </> : null }
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
      repeatMarketsTitle
      upcomingMarketsTitle
      pastMarketsTitle
      repeatMarkets {
        venue
        times
        location {
          latitude
          longitude
        }
        notes
        frequency
      }
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
