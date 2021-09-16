import React from "react"
import { AiFillClockCircle, AiFillCalendar } from "react-icons/ai"
import { HiLocationMarker } from "react-icons/hi"

const dateNow = Date.now() / 1000

const MarketsUpcoming = ({
  marketDate,
  marketVenue,
  marketTimes,
}) => {
  if (marketDate < dateNow) {
    return (
      <div className="flex flex-col py-4">
        <p className="flex flex-row mb-2 space-x-2 text-2xs">
          <span className="flex flex-row items-center p-1 space-x-1 border-b-2 border-gray-300">
            <AiFillCalendar className="opacity-50" />
            <span>{timeConverter(marketDate)}</span>
          </span>
          <span className="flex flex-row items-center p-1 space-x-1 border-b-2 border-gray-300">
            <AiFillClockCircle className="opacity-50" /> <span>{marketTimes}</span>
          </span>
        </p>
        <h4 className="flex flex-row items-center m-0 space-x-1 font-sans">
          <HiLocationMarker className="opacity-50" /> <span>{marketVenue}</span>
        </h4>
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
