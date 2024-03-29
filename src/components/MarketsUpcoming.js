import React from "react"
import { HTMLContent } from "../components/Content"
import { AiFillClockCircle, AiFillCalendar } from "react-icons/ai"
import { HiLocationMarker } from "react-icons/hi"
import ArrowLink from "./atoms/ArrowLink"

const dateNow = Date.now() / 1000

const MarketsUpcoming = ({
  marketDate,
  marketLocation,
  marketNotes,
  marketVenue,
  marketTimes,
}) => {
  if (marketDate > dateNow) {
    return (
      <div className="flex flex-col pt-4 pb-8 border-b border-gray-200">
        <p className="flex flex-row mb-2 space-x-2 text-2xs">
          <span className="flex flex-row items-center p-1 space-x-1 border-b-2 border-red-300">
            <AiFillCalendar className="opacity-50" />
            <span>{timeConverter(marketDate)}</span>
          </span>
          <span className="flex flex-row items-center p-1 space-x-1 border-b-2 border-gray-300">
            <AiFillClockCircle className="opacity-50" /> <span>{marketTimes}</span>
          </span>
        </p>
        <h3 className="flex flex-row items-center m-0 space-x-1 font-sans">
          <HiLocationMarker className="opacity-50" /> <span>{marketVenue}</span>
        </h3>

        { marketLocation ? 

        <ArrowLink
          text="See on a map"
          newTab={true}
          className="self-start"
          destination={
            "https://maps.google.com/?q=" +
            marketLocation.latitude +
            "," +
            marketLocation.longitude
          }
        />

        : null }

        {marketNotes ? (
          <HTMLContent className="mt-8" content={marketNotes} />
        ) : null}
      </div>
    )
  } else {
    return null
  }
}

function timeConverter(unixTimestamp) {
  var a = new Date(unixTimestamp * 1000)
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  var day = days[a.getDay()]
  var time = day + ", " + date + " " + month + " " + year
  return time
}

export default MarketsUpcoming