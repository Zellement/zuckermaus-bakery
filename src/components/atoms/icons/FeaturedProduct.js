import React from "react"

export default function IconFeaturedProduct() {
  return (
    <span className="absolute bottom-0 right-0 inline-flex items-center justify-center p-1 -mt-2 text-xs text-center text-blue-400 bg-blue-100 border border-blue-400 rounded-full font-display">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current"
      >
        <path
          d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Featured Product
    </span>
  )
}
