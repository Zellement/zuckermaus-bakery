import React from "react"
import Map from "./Map"

const dateNow = Date.now() / 1000

const MarketsUpcoming = ({
  marketDate,
  marketLocation,
  marketNotes,
  marketVenue,
}) => {
  if (marketDate > dateNow) {
    const mapCoords = [marketLocation.longitude, marketLocation.latitude]
    return (
      <div>
        <h3 className="">{marketVenue}</h3>

        {/* <Map /> */}

      </div>
    )
  } else {
    return null
  }
}

export default MarketsUpcoming
