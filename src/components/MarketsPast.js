import React from "react"

const dateNow = Date.now() / 1000

const MarketsUpcoming = ({
  marketDate,
  marketLocation,
  marketNotes,
  marketVenue,
}) => {
  if (marketDate < dateNow) {
    return (
      <div>
        <h3 className="">{marketVenue}</h3>
      </div>
    )
  } else {
    return null
  }
}

export default MarketsUpcoming
