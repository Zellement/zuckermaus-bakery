import React from "react"
import { Link } from "gatsby"
import { ArrowRight, ArrowLeft } from "./icons/Arrows"

export default function ArrowLink({
  destination,
  alkey,
  className,
  text,
  arrowLeft,
  newTab,
}) {
  if (newTab) {
    return (

      <a
        href={destination}
        key={alkey}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "inline-flex items-center mt-2 group space-x-2 text-lg group arrow-link " +
          className
        }
      >
        {arrowLeft ? <ArrowLeft className="max-w-16" /> : null}
        <span
          className={
            "inline-block font-bold transition-all flex-grow flex " +
            (arrowLeft ? "group-hover:pl-4" : "group-hover:pr-4")
          }
        >
          {text}
        </span>
        {arrowLeft ? null : <ArrowRight className="max-w-16" />}
      </a>

    )
  } else {
    return (
      <Link
        to={destination}
        key={alkey}
        className={
          "inline-flex items-center mt-2 group space-x-2 text-lg group arrow-link " +
          className
        }
      >
        {arrowLeft ? <ArrowLeft className="max-w-16" /> : null}
        <span
          className={
            "inline-block font-bold transition-all flex-grow flex " +
            (arrowLeft ? "group-hover:pl-4" : "group-hover:pr-4")
          }
        >
          {text}
        </span>
        {arrowLeft ? null : <ArrowRight className="max-w-16" />}
      </Link>
    )
  }
}
