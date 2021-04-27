import React from "react"

export function ArrowRight( {className} ) {
  return (
    <svg
      width="80"
      height="15"
      viewBox="0 0 80 15"
      className={"fill-current w-full " + className }
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M79.707 8.207a1 1 0 000-1.414L73.343.429a1 1 0 10-1.414 1.414L77.586 7.5l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 8.5h79v-2H0v2z"/>
    </svg>
  )
}

export function ArrowLeft( {className} ) {
  return (
    <svg
      width="80"
      height="15"
      className={"fill-current w-full " + className }
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 80 15"
    >
      <path d="M.293 8.207a1 1 0 010-1.414L6.657.429A1 1 0 018.07 1.843L2.414 7.5l5.657 5.657a1 1 0 11-1.414 1.414L.293 8.207zM80 8.5H1v-2h79v2z"/>
    </svg>
  )
}