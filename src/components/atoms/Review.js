import React from "react"
import { ImQuotesLeft } from "react-icons/im"

export default function Review({ name, text }) {
  return (
    <>
      <p className="text-lg font-display lg:text-xl">{name}</p>
      <div className="relative flex flex-row mt-2 space-x-2">
        <ImQuotesLeft className="absolute top-0 left-0 text-4xl opacity-10" />
        <p className="pl-16">{text}</p>
      </div>
    </>
  )
}
