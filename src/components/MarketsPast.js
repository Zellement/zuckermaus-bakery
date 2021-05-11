import React from "react"
import { HTMLContent } from "../components/Content"
import { AiFillClockCircle, AiFillCalendar } from "react-icons/ai"

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
            <AiFillCalendar />
            <span>{timeConverter(marketDate)}</span>
          </span>
          <span className="flex flex-row items-center p-1 space-x-1 border-b-2 border-gray-300">
            <AiFillClockCircle /> <span>{marketTimes}</span>
          </span>
        </p>
        <h4 className="m-0 font-sans">{marketVenue}</h4>
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
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  var day = days[a.getDay()]
  var time = day + ", " + date + " " + month + " " + year
  return time
}

export default MarketsUpcoming
