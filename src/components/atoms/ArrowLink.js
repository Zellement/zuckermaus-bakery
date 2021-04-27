import React from "react"
import { Link } from "gatsby"
import { ArrowRight } from "./icons/Arrows"

export default function ArrowLink( {destination, alkey, className, text} ) {
  return (
    <Link
      to={destination}
      key={alkey}
      className={"inline-flex items-center mt-2 group space-x-2 transition-all duration-300 text-lg text-sugar-pink-900 group " + className }
    >
      <span className="inline-block font-bold transition-all duration-300 group-hover:pr-4 whitespace-nowrap">{ text }</span>
      <ArrowRight />
    </Link>
  )
}
